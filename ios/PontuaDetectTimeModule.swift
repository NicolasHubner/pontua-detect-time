import ExpoModulesCore

public class PontuaDetectTimeModule: Module {
  public func definition() -> ModuleDefinition {
    Name("PontuaDetectTime")

    // Check if "Set Automatically" is enabled for date & time
    Function("isAutoDateTimeEnabled") {
      return true
    }

    // Check if "Set Automatically" is enabled for time zone
    Function("isAutoTimeZoneEnabled") {
      return true
    }
  }
}
