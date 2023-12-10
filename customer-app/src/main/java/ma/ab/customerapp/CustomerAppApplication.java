package ma.ab.customerapp;

import ma.ab.customerapp.entities.Customer;
import ma.ab.customerapp.repositories.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CustomerAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(CustomerAppApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(CustomerRepository customerRepository){
        return args -> {
            customerRepository.save(Customer.builder().name("Anas").email("Anas@gmail.com").build());
            customerRepository.save(Customer.builder().name("Ali").email("Ali@gmail.com").build());
            customerRepository.save(Customer.builder().name("Amal").email("Amal@gmail.com").build());
        };
    }
}
