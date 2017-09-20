---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsQoEConfiguration
schema: 2.0.0
---

# Set-CsQoEConfiguration

## SYNOPSIS
Modifies an existing collection of QoE (Quality of Experience) settings.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsQoEConfiguration [[-Identity] <XdsIdentity>] [-EnableExternalConsumer <Boolean>]
 [-EnablePurging <Boolean>] [-EnableQoE <Boolean>] [-ExternalConsumerIssuedCertId <IssuedCertId>]
 [-ExternalConsumerName <String>] [-ExternalConsumerURL <String>] [-KeepQoEDataForDays <UInt32>]
 [-PurgeHourOfDay <UInt32>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsQoEConfiguration [-Instance <PSObject>] [-EnableExternalConsumer <Boolean>] [-EnablePurging <Boolean>]
 [-EnableQoE <Boolean>] [-ExternalConsumerIssuedCertId <IssuedCertId>] [-ExternalConsumerName <String>]
 [-ExternalConsumerURL <String>] [-KeepQoEDataForDays <UInt32>] [-PurgeHourOfDay <UInt32>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
QoE metrics track the quality of audio and video calls made in your organization, including such things as the number of network packets lost, background noise and the amount of "jitter" (differences in packet delay).
These metrics are stored in a database apart from other data (such as call detail records), which allows you to enable and disable QoE independent of other data recording.
Use this cmdlet to modify settings that configure QoE at the global or site level.

QoE is part of the Monitoring Server role; therefore Monitoring Server must be deployed on your Skype for Business Server installation before QoE recording takes effect or any QoE data can be collected.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsQoEConfiguration -Identity site:Redmond -EnableQoE $False
```

The command in Example 1 uses the `Set-CsQoEConfiguration` cmdlet to modify the Quality of Experience settings for the Redmond site (-Identity site:Redmond).
The new settings turn off QoE by setting the EnableQoE parameter to False.


### -------------------------- Example 2 --------------------------
```
Set-CsQoEConfiguration -Identity site:Dublin -KeepQoEDataForDays 45 -PurgeHourOfDay 4
```

This command modifies QoE settings that apply to the Dublin site.
In this example we've set the KeepQoEDataForDays parameter to 45, so QoE data will be purged from the database after 45 days.
In addition, we've set the PurgeHourOfDay parameter to 4, meaning any data older than the 45 days we just specified will be purged at 4:00 AM.

Note: If you have enabled QoE and call detail recording (CDR), for performance reasons it's a good idea to make sure the PurgeHourOfDay setting is different for QoE than for CDR.


## PARAMETERS

### -Identity
The unique identifier of the settings you want to modify.
Possible values are global and site:\<site name\>, where \<site name\> is the name of the site in your Skype for Business Server deployment to which you want to apply the changes.


```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
An object reference to a QoE configuration object.
This object must be of type QoESettings and can be retrieved by calling the `Get-CsQoEConfiguration` cmdlet.


```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -EnableExternalConsumer
Specifies whether an external consumer is able to receive QoE reports.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnablePurging
Specifies whether records will be purged after the duration defined in the KeepQoEDataForDays property has elapsed.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableQoE
Specifies whether QoE records will be collected and saved to the monitoring database.

Note that even if EnableQoE is set to True, QoE data will not be collected unless a Monitoring Server has been deployed and associated with a Registrar pool.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalConsumerIssuedCertId
The certificate ID of the certificate that allows access to the external consumer web service.

```yaml
Type: IssuedCertId
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalConsumerName
The friendly name of the external consumer of the QoE report.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalConsumerURL
The URL of the external consumer to which the QoE reports will be posted.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeepQoEDataForDays
The number of days QoE data will be stored before being purged from the database.
This value is ignored if EnablePurging is set to False.

Must be a value from 1 through 2562.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PurgeHourOfDay
The hour of the day that QoE records that have exceeded the number of days specified in the KeepQoEDataForDays property will be purged.

Must be a value 0 through 23, representing the hour of the day.
For example, 0 would be midnight, 13 would be 1:00 PM.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.QoE.QoESettings object.
Accepts pipelined input of QoE configuration objects.

## OUTPUTS

###  
The `Set-CsQoEConfiguration` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.QoE.QoESettings object.

## NOTES

## RELATED LINKS

[New-CsQoEConfiguration]()

[Remove-CsQoEConfiguration]()

[Get-CsQoEConfiguration]()
