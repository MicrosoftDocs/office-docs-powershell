---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsTelemetryConfiguration
schema: 2.0.0
---

# Get-CsTelemetryConfiguration

## SYNOPSIS
Use the Get-CsTelemetryConfiguration cmdlet to return the settings on existing telemetry configurations. 
Telemetry returns a small set of Skype for Business operational data to Microsoft for quality tracking and product improvement. The data includes sign-in information, meeting joins, and other activity data.

## SYNTAX

### Filter
```
Get-CsTelemetryConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsTelemetryConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
For privacy information, see the Skype for Business Privacy Statement (http://go.microsoft.com/fwlink/?LinkID=517480&clcid=0x409).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsTelemetryConfiguration -Identity Site:Redmond
```

This example returns the settings for the configuration scoped to the Redmond site.


## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return one or more collections of telemetry configuration settings.
For example, to return all the settings that have been configured at the site scope use the following syntax: -Filter "site:*".
The Filter and the Identity parameters are mutually exclusive.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
A unique identifier that includes the scope of the telemetry configuration.
Telemetry configurations can be scoped at the Global, Site, or Service level.
For example, "site:Redmond" (for site).
The format of the service scope is "Service:\<Identity\>", where identity is derived from the topology.
You can use the following cmds to identify the relevant services.

`Get-CsService -WebServer | fl Identity`

`Get-CsService -PoolFqdn \<pool\> | fl Identity`

The first command will give you all of the WebServices in the topology, regardless of the pool.
The second will give you all of the services on the pool, regardless of their role.
You can combine the two commands to zero in on a single role in a single pool.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the information from the local replica of the Central Management store, rather than the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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

### Microsoft.Rtc.Management.WritableConfig.Settings.SignInTelemetry.SignInTelemetryConfiguration


## NOTES


## RELATED LINKS

