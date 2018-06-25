---
external help file: 
applicable: Skype for Business Online
title: ConvertTo-JsonForPSWS
schema: 2.0.0
---

# ConvertTo-JsonForPSWS

## SYNOPSIS
Converts an object to a JSON-formatted string for PowerShell Web Services.

## SYNTAX

```
ConvertTo-JsonForPSWS [[-InputObject] <Object>] [-Compress] [-Depth <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The `ConvertTo-JsonForPSWS` cmdlet converts any object to a string in JavaScript Object Notation (JSON) format for PowerShell Web Services. The properties are converted to field names, the property values are converted to field values, and the methods are removed.

You can then use the `ConvertTo-JsonForPSWS` cmdlet to convert a JSON-formatted string to a JSON object, which is easily managed in Windows PowerShell.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> (Get-UICulture).Calendar | ConvertTo-JsonForPSWS
{
    "MinSupportedDateTime":  "\/Date(-62135568000000)\/",
    "MaxSupportedDateTime":  "\/Date(253402300799999)\/",
    "AlgorithmType":  "SolarCalendar",
    "CalendarType":  "Localized",
    "Eras":  [
                 1
             ],
    "TwoDigitYearMax":  2029,
    "IsReadOnly":  false
}
```

This command uses the `ConvertTo-JsonForPSWS` cmdlet to convert a GregorianCalendar object to a JSON-formatted string for PowerShell Web Services.

### -------------------------- Example 2 --------------------------
```
PS C:\> @{Account="User01";Domain="Domain01";Admin="True"} | ConvertTo-JsonForPSWS -Compress
{"Admin":"True","Account":"User01","Domain":"Domain01"}
```

This command shows the effect of using the Compress parameter of `ConvertTo-JsonForPSWS`. The compression affects only the appearance of the string, not its validity.

### -------------------------- Example 3 --------------------------
```
PS C:\> Get-Date | Select-Object -Property * | ConvertTo-JsonForPSWS
{
    "DisplayHint":  {
                        "value":  2,
                        "Value":  "DateTime"
                    },
    "DateTime":  "domingo, 27 de mayo de 2018 19:01:15",
    "Date":  "\/Date(1527390000000)\/",
    "Day":  27,
    "DayOfWeek":  {
                      "value":  0,
                      "Value":  "Sunday"
                  },
    "DayOfYear":  147,
    "Hour":  19,
    "Kind":  {
                 "value":  2,
                 "Value":  "Local"
             },
    "Millisecond":  225,
    "Minute":  1,
    "Month":  5,
    "Second":  15,
    "Ticks":  636630444752251610,
    "TimeOfDay":  {
                      "Hours":  19,
                      "Minutes":  1,
                      "Seconds":  15,
                      "Ticks":  684752251610,
                      "Days":  0,
                      "Milliseconds":  225,
                      "TotalDays":  0.79253732825231482,
                      "TotalHours":  19.020895878055555,
                      "TotalMilliseconds":  68475225.161,
                      "TotalMinutes":  1141.2537526833335,
                      "TotalSeconds":  68475.225161
                  },
    "Year":  2018
}
```

This command shows how to use the `ConvertTo-JsonForPSWS` cmdlet to convert an object to a JSON string for PowerShell Web Services.

It uses the `ConvertTo-JsonForPSWS` cmdlet to convert a System.DateTime object from the Get-Date cmdlet to a JSON-formatted string for PowerShell Web Services. The command uses the Select-Object cmdlet to get all () of the properties of the **DateTime* object. The output shows the JSON string that `ConvertTo-JsonForPSWS` returned.

### -------------------------- Example 4 --------------------------
```
PS C:\> $JsonSecurityHelp = Get-Content $Pshome\Modules\Microsoft.PowerShell.Security\en-US\Microsoft.PowerShell.Security.dll-Help.xml | ConvertTo-JsonForPSWS
```

This command uses the `ConvertTo-JsonForPSWS` cmdlet to convert a Windows PowerShell Help file from XML format to JSON format for PowerShell Web Services.

## PARAMETERS

### -Compress
Omits white space and indented formatting in the output string.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Depth
Specifies how many levels of contained objects are included in the JSON representation. The default value is 2.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InputObject
Specifies the objects to convert to JSON format. Enter a variable that contains the objects, or type a command or expression that gets the objects. You can also pipe an object to `ConvertTo-JsonForPSWS`.

The InputObject parameter is required, but its value can be null ($Null) or an empty string. When the input object is $Null, `ConvertTo-JsonForPSWS` does not generate any output. When the input object is an empty string, `ConvertTo-JsonForPSWS` returns an empty string.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
Indicates that this cmdlet runs as a background job.

When you specify the AsJob parameter, the command immediately returns an object that represents the background job. You can continue to work in the session while the job finishes. The job is created on the local computer and the results from the Skype for Business Online session are automatically returned to the local computer. To get the job results, use the Receive-Job cmdlet.

For more information about Windows PowerShell background jobs, see [about_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_jobs?view=powershell-6) and [about_Remote_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_jobs?view=powershell-6).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Object
You can pipe any object to ConvertTo-JsonForPSWS.

## OUTPUTS

### System.String

## NOTES

## RELATED LINKS

[ConvertTo-Json](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/convertto-json?view=powershell-6)

