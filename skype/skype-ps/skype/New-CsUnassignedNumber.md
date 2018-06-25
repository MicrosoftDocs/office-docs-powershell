---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsUnassignedNumber
schema: 2.0.0
---

# New-CsUnassignedNumber

## SYNOPSIS
Creates a new range of unassigned numbers and the routing rules that apply to those numbers.
Running this cmdlet will add an entry to the unassigned number routing table.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### AnnouncementService
```
New-CsUnassignedNumber [-Identity] <XdsGlobalRelativeIdentity> [-NumberRangeStart] <String>
 [-NumberRangeEnd] <String> [-AnnouncementService] <String> [-AnnouncementName] <String> [-Priority <Int32>]
 [-Force] [-InMemory] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### AutoAttendant
```
New-CsUnassignedNumber [-Identity] <XdsGlobalRelativeIdentity> [-NumberRangeStart] <String>
 [-NumberRangeEnd] <String> [-ExUmAutoAttendantPhoneNumber] <String> [-Priority <Int32>] [-Force] [-InMemory]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Unassigned numbers are phone numbers that have been assigned to an organization but that have not been assigned to specific users or phones.
Skype for Business Server can be set up to route calls to appropriate destinations when an unassigned number is called.
This cmdlet creates the settings that define that routing.

Before running this cmdlet, your system must already either have Announcements defined or an Exchange Auto Attendant set up.
To determine whether you have Announcements, call the `Get-CsAnnouncement` cmdlet.
To create a new Announcement, call the `New-CsAnnouncement` cmdlet.
To check on Exchange Auto Attendant settings, run the `Get-CsExUmContact` cmdlet.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-CsUnassignedNumber -Identity UNSet1 -NumberRangeStart "+14255551000" -NumberRangeEnd "+14255551100" -AnnouncementService ApplicationServer:redmond.litwareinc.com -AnnouncementName "Welcome Announcement"
```

This example creates an unassigned number range with the name UNSet1.
We use the NumberRangeStart (+14255551000) and NumberRangeEnd (+14255551100) parameters to define the range of unassigned numbers to which the specified announcement will apply.
Finally, we specify the Announcement by first supplying the AnnouncementService parameter with the service ID of the Announcement service and then passing the value "Welcome Announcement" to the parameter AnnouncementName.
Keep in mind that an Announcement with that name must already exist in the system.


### -------------------------- Example 2 --------------------------
```
New-CsUnassignedNumber -Identity UNSet2 -NumberRangeStart "+14255552100" -NumberRangeEnd "+14255552200" -ExUmAutoAttendantPhoneNumber "+12065551234"
```

This example creates an unassigned number range with the name UNSet2.
As in Example 1 we use the NumberRangeStart (+14255552100) and NumberRangeEnd (+14255552200) parameters to define the range of unassigned numbers to which the specified announcement will apply.
However, in this example, instead of using the Announcement service, this number range will use the Exchange Auto Attendant.
(The Auto Attendant is a single number designated as the organization's main number that guides users through voice prompts to help them reach the appropriate party.) We pass a phone number to the ExUmAutoAttendantPhoneNumber parameter to complete this command.
Note that Exchange must be set up and this number must be an existing contact object phone number in Active Directory Domain Services.
The contact must be an Auto Attendant contact (the AutoAttendant property for the contact must be True).


### -------------------------- Example 3 --------------------------
```
New-CsUnassignedNumber -Identity UNSet2 -NumberRangeStart "+14255552100" -NumberRangeEnd "+14255552200" -ExUmAutoAttendantPhoneNumber "+12065551234" -Priority 2
```

Example 3 is almost identical to Example 2: It creates an unassigned number range with the name UNSet2.
The difference in this example is that we've added the Priority parameter, in this case with a value of 2.
This means that if an unassigned number range has been defined that overlaps this one and that number range has a higher priority (a lower priority number, such as 1), calls will be routed based on the settings for that range rather than this one.


## PARAMETERS

### -Identity
A unique name for the range of unassigned numbers being created.
All unassigned number ranges have a global scope, so the name specified here must be unique throughout the Skype for Business Server deployment.


```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnnouncementName
The name of the Announcement that will be used to handle calls to this range of numbers.

```yaml
Type: String
Parameter Sets: AnnouncementService
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnnouncementService
The fully qualified domain name (FQDN) or service ID of the Announcement service.
This parameter is required only if you have not specified a value for the ExUmAutoAttendantPhoneNumber parameter.

```yaml
Type: String
Parameter Sets: AnnouncementService
Aliases: AnnouncementServerFqdn
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExUmAutoAttendantPhoneNumber
The phone number of the Exchange Auto Attendant to route calls in this range to.
This field is required only if you are not using an Announcement Service (in which case you do not supply values for the AnnouncementService or AnnouncementName parameters).
The Exchange Auto Attendant contact must already be set up in order to assign a value to this parameter.


```yaml
Type: String
Parameter Sets: AutoAttendant
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberRangeStart
The first number in the range of unassigned numbers.
Must be less than or equal to the value supplied for NumberRangeEnd.

The number must match the regular expression (tel:)?(\+)?\[1-9\]\d{0,17}(;ext=\[1-9\]\d{0,9})?.
This means the number may begin with the string tel: (if you don't specify that string it will be automatically added for you), a plus sign (+) and a digit 1 through 9.
The phone number can be up to 17 digits and may be followed by an extension in the format ;ext= followed by the extension number.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberRangeEnd
The last number in the range of unassigned numbers.
Must be greater than or equal to the number supplied for NumberRangeStart.
To specify a range of one number, use the same number for the NumberRangeStart and NumberRangeEnd.

The number must match the regular expression (tel:)?(\+)?\[1-9\]\d{0,17}(;ext=\[1-9\]\d{0,9})?.
This means the number may begin with the string tel: (if you don't specify that string it will be automatically added for you), a plus sign (+) and a digit 1 through 9.
The phone number can be up to 17 digits and may be followed by an extension in the format ;ext= followed by the extension number.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
It is possible for unassigned number ranges to overlap.
If a number falls within more than one range, the range with the highest priority will take effect.


```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

###  
None.

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.Voice.Helpers.DisplayAnnouncementVacantNumberRange.

## NOTES

## RELATED LINKS

[Remove-CsUnassignedNumber](Remove-CsUnassignedNumber.md)

[Set-CsUnassignedNumber](Set-CsUnassignedNumber.md)

[Get-CsUnassignedNumber](Get-CsUnassignedNumber.md)

[New-CsAnnouncement](New-CsAnnouncement.md)

[Get-CsAnnouncement](Get-CsAnnouncement.md)

[Get-CsExUmContact](Get-CsExUmContact.md)

