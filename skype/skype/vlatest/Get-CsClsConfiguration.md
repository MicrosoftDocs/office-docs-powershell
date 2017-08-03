---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsClsConfiguration

## SYNOPSIS
Returns information about the centralized logging configuration settings in use in the organization.
Centralized logging provides a way for administrators to simultaneously enable or disable event tracing on multiple computers.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Filter
```
Get-CsClsConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsClsConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the Search-CsClsLogging cmdlet.

Centralized logging is built around a series of predefined scenarios that offer a more finely-targeted approach to logging than offered in previous versions of Skype for Business Server.
These scenarios predetermine the server components and logging for you; as a result, an administrator enabling the RGS scenario can be confident that he or she will only log information relevant to the Response Group service and not to, say, the audio conferencing provider service.

It is also possible to define custom scenarios by using the New-CsClsScenario cmdlet.

Centralized logging is managed by using collections of centralized logging service configuration settings.
When you install Skype for Business Server, you install a global set of these configuration settings; in addition, administrators can add custom settings collections at the site scope.
The Get-CsClsConfiguration cmdlet enables administrators to return information about all the central logging configuration settings currently in use in the organization.

The functions carried out by the Get-CsClsConfiguration cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsClsConfiguration
```

The command shown in Example 1 returns information about all the centralized logging configuration settings currently in use in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsClsConfiguration -Identity "site:Redmond"
```

In Example 2, information is returned for a single collection of centralized logging configuration settings: the collection applied to the Redmond site.

### -------------------------- Example 3 --------------------------
```
Get-CsClsConfiguration -Identity "site:Redmond" | Select-Object -ExpandProperty Scenarios
```

Example 3 shows detailed information for the centralized logging scenarios available to the Redmond site.
In order to do this, the command first retrieves all the centralized logging property values for the Redmond site.
Those property values are then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to "expand" the values found in the Scenarios property.
When you expand a property you simply display all the information stored in that property in an easy-to-read fashion.

### -------------------------- Example 4 --------------------------
```
Get-CsClsConfiguration | Where-Object {$_.EtlFileRolloverMinutes -gt 60}
```

In Example 4, information is returned for all the centralizing logging configuration settings where the ETL file rollover interval is greater than 1 hour.
To carry out this task, the command first calls the Get-CsClsConfiguration cmdlet without any parameters; this returns a collection of all the centralized logging configuration settings in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those settings where the EtlFileRolloverMinutes property is greater than (-gt) 60 minutes.

### -------------------------- Example 5 --------------------------
```
Get-CsClsConfiguration | Where-Object {$_.Scenarios.Name -match "HybridVoice"}
```

The command shown in Example 5 is similar to the command shown in Example 4; in this case, however, information is returned only for those centralized logging configuration settings that include a "HybridVoice" scenario.
To do this, the command first uses the Get-CsClsConfiguration cmdlet to return a collection of all the centralized logging configuration settings.
That collection is then piped to the Where-Object cmdlet, which selects only those settings that have at least one scenario where the Name property includes (-match) the string value "HybridVoice".


## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return a collection (or collections) of centralized logging configuration settings.
For example, to return a collection of all the settings configured at the site scope, use this syntax:

`-Filter "site:*"`

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Indicates the unique identifier for the collection of centralized logging configuration settings you want to return.
To refer to the global settings use this syntax:

`-Identity "global"`

To refer to a collection configured at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

Note that you cannot use wildcards when specifying an Identity.
If you need to use wildcards, then include the Filter parameter instead.

If this parameter is not specified, then the Get-CsClsConfiguration cmdlet returns a collection of all the centralized logging configuration settings in use in the organization.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the centralized logging configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.CentralizedLoggingConfiguration


## NOTES


## RELATED LINKS

[New-CsClsConfiguration]()

[Remove-CsClsConfiguration]()

[Set-CsClsConfiguration]()