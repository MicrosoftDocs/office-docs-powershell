---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsQoEConfiguration
schema: 2.0.0
---

# Get-CsQoEConfiguration

## SYNOPSIS
Retrieves one or more collections of Quality of Experience (QoE) settings.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsQoEConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsQoEConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
QoE metrics track the quality of audio and video calls made in your organization, including such things as the number of network packets lost, background noise, and the amount of "jitter" (differences in packet delay).
These metrics are stored in a database apart from other data (such as call detail records), which allows you to enable and disable QoE independent of other data recording.
Use this cmdlet to retrieve settings that configure QoE at the global or site level.

QoE is part of the Monitoring Server role; therefore Monitoring Server must be deployed on your Skype for Business Server 2015 installation before QoE recording takes effect or any QoE data can be collected.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsQoEConfiguration
```

This example uses the Get-CsQoEConfiguration cmdlet to return a collection of all the QoE settings configured for use in your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsQoEConfiguration -Identity site:Redmond
```

Example 2 uses the Identity parameter to ensure that the Get-CsQoEConfiguration cmdlet returns only the QoE settings with the Identity site:Redmond.

### -------------------------- Example 3 --------------------------
```
Get-CsQoEConfiguration -Filter site:*
```

In Example 3 the Filter parameter is used to return all the QoE settings that have been configured at the site scope.
The wildcard "site:*" returns all the QoE settings that have an Identity beginning with the string value site:.
Settings that meet those criteria are settings that have been configured at the site scope.

### -------------------------- Example 4 --------------------------
```
Get-CsQoEConfiguration | Where-Object {$_.KeepQoEDataForDays -lt 30}
```

Example 4 returns a collection of all the QoE settings where the KeepQoEDataForDays property is less than 30 days.
To do this, the command first uses the Get-CsQoEConfiguration cmdlet to return a collection of all the QoE settings configured in the organization.
That collection is then piped to the Where-Object cmdlet, which applies a filter that limits the returned data to those settings that have a KeepQoEDataForDays value of less than 30 days.


## PARAMETERS

### -Identity
The unique identifier of the settings you want to retrieve.
Possible values are global and site:\<site name\>, where \<site name\> is the name of the site in your Skype for Business Server deployment to which you want to apply the changes.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcard characters in order to return a collection (or multiple collections) of QoE configuration settings.
To return a collection of all the settings configured at the site scope, use this syntax:

`-Filter site:*`

To return a collection of all the settings that have the string value "Western" somewhere in their Identity (the only property you can filter on) use this syntax:

`-Filter *Western*`

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the settings from the local replica of the Central Management store.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

### Microsoft.Rtc.Management.WritableConfig.Settings.QoE.QoESettings


## NOTES


## RELATED LINKS

[New-CsQoEConfiguration](New-CsQoEConfiguration.md)

[Remove-CsQoEConfiguration](Remove-CsQoEConfiguration.md)

[Set-CsQoEConfiguration](Set-CsQoEConfiguration.md)

