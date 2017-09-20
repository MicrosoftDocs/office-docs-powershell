---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: New-CsQoEConfiguration
schema: 2.0.0
---

# New-CsQoEConfiguration

## SYNOPSIS

Creates a new collection of QoE (Quality of Experience) settings.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsQoEConfiguration [-Identity] <XdsIdentity> [-EnableExternalConsumer <Boolean>] [-EnablePurging <Boolean>]
 [-EnableQoE <Boolean>] [-ExternalConsumerIssuedCertId <IssuedCertId>] [-ExternalConsumerName <String>]
 [-ExternalConsumerURL <String>] [-KeepQoEDataForDays <UInt32>] [-PurgeHourOfDay <UInt32>] [-Force] [-InMemory]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

QoE metrics track the quality of audio and video calls made in your organization, including such things as the number of network packets lost, background noise, and the amount of "jitter" (differences in packet delay).
These metrics are stored in a database apart from other data (such as call detail records), which allows you to enable and disable QoE independent of other data recording.
Use this cmdlet to create settings that configure QoE at the site level.
(Settings at the global level exist by default and cannot be removed.)

QoE is part of the Monitoring Server role; therefore Monitoring Server must be deployed on your Skype for Business Server installation before QoE recording takes effect or any QoE data can be collected.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

New-CsQoEConfiguration -Identity site:Redmond -EnableQoE $False
```

The command in Example 1 uses the New-CsQoEConfiguration cmdlet to create a new set of Quality of Experience settings with the Identity site:Redmond.
In addition to the Identity site:Redmond, the new settings also have the EnableQoE property set to False.
Because site settings take precedence over global settings, this means that QoE will be disabled for the Redmond site, regardless of whether or not QoE has been enabled at the global scope.


### -------------------------- EXAMPLE 2 -------------------------- 
```

New-CsQoEConfiguration -Identity site:Dublin -KeepQoEDataForDays 30 -PurgeHourOfDay 4
```

This command creates new QoE settings that apply to the Dublin site.
In this example we've set the KeepQoEDataForDays parameter to 30, so QoE data will be purged from the database after 30 days rather than the default 60 days.
In addition, we've set the PurgeHourOfDay parameter to 4, meaning any data older than the 30 days we just specified will be purged at 4:00 AM.

Note: If you have enabled QoE and call detail recording (CDR), for performance reasons it's a good idea to make sure the PurgeHourOfDay setting is different for QoE than for CDR.


## PARAMETERS

### -Identity

The site to which the new settings apply.
This must be entered in the format site:\<site name\>, where \<site name\> is the name of the site in your Skype for Business Server deployment.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableExternalConsumer
Specifies whether an external consumer is able to receive QoE reports.

Default: False

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

Default: True

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

Default: True

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

Default: 60

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
The hour of day that QoE records that have exceeded the number of days specified in the KeepQoEDataForDays property will be purged.

Must be a value 0 through 23, representing the hour of the day.
For example, 0 would be midnight, 13 would be 1:00 PM.
Default: 1

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

### -InMemory

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.WritableConfig.Settings.QoE.QoESettings.

## NOTES

## RELATED LINKS

[Remove-CsQoEConfiguration]()

[Set-CsQoEConfiguration]()

[Get-CsQoEConfiguration]()

