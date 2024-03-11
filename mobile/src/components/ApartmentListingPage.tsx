import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';

interface Apartment {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const ApartmentListingPage = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);

  useEffect(() => {
    fetchApartments();
  }, []);

  const fetchApartments = async () => {
    try {
      const response = await fetch('http://172.29.224.1:3000/apartments');
      const data = await response.json();
      setApartments(data);
    } catch (error) {
      console.error('Error fetching apartments:', error);
    }
  };

  const handleApartmentPress = (apartment: Apartment) => {
    setSelectedApartment(apartment);
  };

  const handleCloseModal = () => {
    setSelectedApartment(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Find Your New Home</Text>
      <View style={styles.grid}>
        {apartments.map((apartment) => (
          <TouchableOpacity
            key={apartment._id}
            onPress={() => handleApartmentPress(apartment)}
            style={styles.apartmentCard}
          >
            <Image
              source={{ uri: apartment.image }}
              style={styles.apartmentImage}
            />
            <View style={styles.apartmentDetails}>
              <Text style={styles.apartmentTitle}>{apartment.title}</Text>
              <Text style={styles.apartmentPrice}>Price: {apartment.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        visible={!!selectedApartment}
        transparent
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        {selectedApartment && (
          <View style={styles.modalContainer}>
            <Image
              source={{ uri: selectedApartment.image }}
              style={styles.modalImage}
            />
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedApartment.title}</Text>
              <Text style={styles.modalDescription}>{selectedApartment.description}</Text>
              <Text style={styles.modalPrice}>Price: {selectedApartment.price}</Text>
              <Text style={styles.modalDate}>Created at: {selectedApartment.createdAt}</Text>

            </View>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        )}
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  apartmentCard: {
    width: '48%',
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 4,
  },
  apartmentImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  apartmentDetails: {
    padding: 16,
  },
  apartmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  apartmentPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 16,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    width: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalDescription: {
    fontSize: 18,
    marginBottom: 8,
  },
  modalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalDate: {
    fontSize: 14,
    marginBottom: 8,
  },
  closeButton: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 8,
    marginTop: 16,
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ApartmentListingPage;
