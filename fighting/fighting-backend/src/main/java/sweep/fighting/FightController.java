package sweep.fighting;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FightController {

    @RequestMapping("/")
    public String home() {
        return "ReactJS-SpringBoot Integration";
    }

    @RequestMapping("/fight")
    public String fight() {
        return "소영이 파이팅";
    }
}
