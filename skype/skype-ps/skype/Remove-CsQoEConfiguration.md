---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsQoEConfiguration

## SYNOPSIS
Removes a collection of QoE (Quality of Experience) settings.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsQoEConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
QoE metrics track the quality of audio and video calls made in your organization, including such things as the number of network packets lost, background noise and the amount of "jitter" (differences in packet delay).
These metrics are stored in a database apart from other data (such as call detail records), which allows you to enable and disable QoE independent of other data recording.
Use this cmdlet to remove settings that configure QoE at the site level.
Calling this cmdlet on the global QoE configuration will reset all properties to the defaults.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsQoEConfiguration -Identity site:Redmond
```

Example 1 uses the `Remove-CsQoEConfiguration` cmdlet to remove the QoE settings assigned to the site Redmond.
Using the Identity parameter ensures that only the settings assigned to the specified site will be removed.


### -------------------------- Example 2 --------------------------
```
Get-CsQoEConfiguration -Filter site:* | Remove-CsQoEConfiguration
```

The command shown in Example 2 removes all the QoE settings that have been assigned at the site scope.
To do this, the command first uses the `Get-CsQoEConfiguration` cmdlet and the Filter parameter to retrieve the appropriate QoE settings; the wildcard string "site:*" ensures that only those settings that have an identity beginning with the string value site: are returned.
The filtered collection is then passed to the `Remove-CsQoEConfiguration` cmdlet, which deletes all the items in the collection.


### -------------------------- Example 3 --------------------------
```
Get-CsQoEConfiguration | Where-Object {$_.KeepQoEDataForDays -lt 30} | Remove-CsQoEConfiguration
```

In Example 3, any QoE settings where the KeepQoEDataForDays property is less than 30 are deleted.
To carry out this task, the command calls the `Get-CsQoEConfiguration` cmdlet without any parameters in order to return a collection of all the QoE settings currently in use in the organization.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those settings where the KeepQoEDataForDays property is less than (-lt) 30 days.
In turn, the filtered collection is piped to the `Remove-CsQoEConfiguration` cmdlet, which deletes each item in that collection.


## PARAMETERS

### -Identity
The unique identifier of the settings you want to remove.
Possible values are global and site:\<site name\>, where \<site name\> is the name of the site in your Skype for Business Server deployment with the settings to be removed.


```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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
This cmdlet does not return a value or object.
Instead, it removes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.QoE.QoESettings object.

## NOTES

## RELATED LINKS

[New-CsQoEConfiguration]()

[Set-CsQoEConfiguration]()

[Get-CsQoEConfiguration]()
