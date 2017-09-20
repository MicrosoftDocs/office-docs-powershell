---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Remove-CsDialInConferencingAccessNumber
schema: 2.0.0
---

# Remove-CsDialInConferencingAccessNumber

## SYNOPSIS
Removes an existing dial-in conferencing access number.
Dial-in conferencing provides a way for users to use a "regular" telephone or mobile phone (that is, a device on the public switched telephone network (PSTN)) to join the audio portion of a conference.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsDialInConferencingAccessNumber [-Identity] <UserIdParameter> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Dial-in conferencing enables users to use any kind of telephone (such as a standard "land line," a mobile phone, or a Voice over Internet Protocol phone) to join the audio portion of a conference.
This enables users to participate in the meeting even if they do not have a computer or an Internet connection.
Users have full audio capabilities: they can speak to other participants and hear everything that takes place.
They just aren't able to see shared slides, video feeds, or other visual elements.

In order to provide users with dial-in conferencing capabilities, you must create dial-in conferencing access numbers: phone numbers users can call in order to be connected to a meeting.
Dial-in conferencing access numbers are created by using the `New-CsDialInConferencingAccessNumber` cmdlet.
When you create a new dial-in conferencing access number, you actually create a new contact object in Active Directory Domain Services; this contact object is used to represent the access number and all its properties.
The `Remove-CsDialInConferencingAccessNumber` cmdlet enables you to delete any of the dial-in conferencing numbers created by using the `New-CsDialInConferencingAccessNumber` cmdlet.
When you run the `Remove-CsDialInConferencingAccessNumber` cmdlet, the cmdlet not only deletes the number from the collection of dial-in conferencing access numbers but also deletes the Active Directory contact object that represents the given access number.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Remove-CsDialInConferencingAccessNumber -Identity sip:RedmondDialIn@litwareinc.com
```

The command shown in Example 1 deletes the dial-in conferencing access number that has the Identity sip:RedmondDialIn@litwareinc.com.


### -------------------------- Example 2 ------------------------
```
Get-CsDialInConferencingAccessNumber -Filter {LineUri -like "tel:+1800*"} | Remove-CsDialInConferencingAccessNumber
```

Example 2 deletes all the toll free dial-in conferencing access numbers; in this example, that means any numbers that have a LineUri that begins with "tel:+1800".
To do this, the command uses the `Get-CsDialInConferencingAccessNumber` cmdlet and the Filter parameter to return a collection of all the toll free access numbers configured for use in the organization; the filter value {LineUri -like "tel:+1800*"} limits the returned data to those numbers where the LineUri property begins with the string value "tel:+1800".
This filtered collection is then piped to the `Remove-CsDialInConferencingAccessNumber` cmdlet, which deletes each number in the collection.


### -------------------------- Example 3 ------------------------
```
Get-CsDialInConferencingAccessNumber -Region "Redmond" | Remove-CsDialInConferencingAccessNumber
```

In Example 3, all the dial-in conferencing access numbers for the Redmond region are deleted.
To carry out this task, the `Get-CsDialInConferencingAccessNumber` cmdlet and the Region parameter are first called in order to return a collection of all the access numbers for the Redmond region.
(That is, any access number that includes Redmond in its list of regions.) This collection is then piped to the `Remove-CsDialInConferencingAccessNumber` cmdlet, which deletes all the access numbers in the collection.


### -------------------------- Example 4 ------------------------
```
Get-CsDialInConferencingAccessNumber -Region $Null | Remove-CsDialInConferencingAccessNumber
```

In Example 4, all the dial-in conferencing access numbers that are not associated with a region are deleted.
To do this, the `Get-CsDialInConferencingAccessNumber` cmdlet is called along with the Region parameter and the parameter value $Null; this returns a collection of access numbers where the Regions property is empty.
That collection is then piped to the `Remove-CsDialInConferencingAccessNumber` cmdlet, which deletes all the numbers in the collection.


### -------------------------- Example 5 ------------------------
```
Get-CsDialInConferencingAccessNumber | Where-Object {$_.PrimaryLanguage -ne "it-IT"} | Remove-CsDialInConferencingAccessNumber
```

The command shown in Example 5 deletes any dial-in conferencing access numbers where the primary language is not set to Italian.
To do this, the `Get-CsDialInConferencingAccessNumber` cmdlet is first called without any parameters in order to return a collection of all the dial-in conferencing access numbers configured for use in the organization.
That collection is then piped to the `Where-Object` cmdlet, which picks out any numbers where the PrimaryLanguage property is not equal to Italian ("it-IT").
Finally, the filtered collection is piped to the `Remove-CsDialInConferencingAccessNumber` cmdlet, which deletes all the access numbers in the collection.


### -------------------------- Example 6 ------------------------
```
Get-CsDialInConferencingAccessNumber -Filter {DisplayName -eq "Default Dial-In Access Number"} | Remove-CsDialInConferencingAccessNumber
```

In Example 6, the dial-in conferencing access number with the display name "Default Dial-In Access Number" is deleted.
To accomplish this task, the `Get-CsDialInConferencingAccessNumber` cmdlet is called along with the Filter parameter and the filter value {DisplayName -eq "Default Dial-In Access Number"}; this filter value limits the returned data to the access number where the DisplayName property is equal to "Default Dial-In Access Number".
The returned object is then piped to the `Remove-CsDialInConferencingAccessNumber` cmdlet, which deletes the corresponding access number.


## PARAMETERS

### -Identity
SIP address of the dial-in conferencing access number (that is, the contact object that represents that number) to be removed.
You must include the sip: prefix when specifying the Identity; for example: `-Identity "sip:RedmondDialIn@litwareinc.com"`.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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
Microsoft.Rtc.Management.Xds.AccessNumber object.
The `Remove-CsDialInConferencingAccessNumber` cmdlet accepts pipelined input of the access number object.

## OUTPUTS

###  
The `Remove-CsDialInConferencingAccessNumber` cmdlet deletes instances of the Microsoft.Rtc.Management.Xds.AccessNumber object.

## NOTES

## RELATED LINKS

[Get-CsDialInConferencingAccessNumber]()

[New-CsDialInConferencingAccessNumber]()

[Set-CsDialInConferencingAccessNumber]()
