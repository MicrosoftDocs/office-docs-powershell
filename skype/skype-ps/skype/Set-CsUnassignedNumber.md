---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsUnassignedNumber
schema: 2.0.0
---

# Set-CsUnassignedNumber

## SYNOPSIS
Modifies an existing range of unassigned numbers and the routing rules that apply to those numbers.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### RangeSpecification
```
Set-CsUnassignedNumber [[-Identity] <XdsGlobalRelativeIdentity>] [[-NumberRangeStart] <String>]
 [[-NumberRangeEnd] <String>] [-Instance <PSObject>] [-Priority <Int32>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### AnnouncementService
```
Set-CsUnassignedNumber [[-Identity] <XdsGlobalRelativeIdentity>] [[-NumberRangeStart] <String>]
 [[-NumberRangeEnd] <String>] [-AnnouncementService] <String> [-AnnouncementName] <String>
 [-Instance <PSObject>] [-Priority <Int32>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Identity
```
Set-CsUnassignedNumber [[-Identity] <XdsGlobalRelativeIdentity>] [-Priority <Int32>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### AutoAttendant
```
Set-CsUnassignedNumber [[-Identity] <XdsGlobalRelativeIdentity>] [[-NumberRangeStart] <String>]
 [[-NumberRangeEnd] <String>] [-ExUmAutoAttendantPhoneNumber] <String> [-Instance <PSObject>]
 [-Priority <Int32>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsUnassignedNumber [-Instance <PSObject>] [-Priority <Int32>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Unassigned numbers are phone numbers that have been assigned to an organization but that have not been assigned to specific users or phones.
Skype for Business Server can be set up to route calls to appropriate destinations when an unassigned number is called.
This cmdlet modifies the settings that define that routing.

In order to modify some of the settings for this cmdlet, your system must already either have Announcements defined or an Exchange Auto Attendant set up.
To determine whether you have Announcements, call the `Get-CsAnnouncement` cmdlet.
To create a new Announcement, call the `New-CsAnnouncement` cmdlet.
To check Exchange Auto Attendant settings, run the `Get-CsExUmContact` cmdlet.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsUnassignedNumber -Identity UNSet1 -NumberRangeStart "+14255551000" -NumberRangeEnd "+14255551900"
```

This example modifies the unassigned number range with the name UNSet1.
We first pass the Identity parameter the value UNSet1, the name of the unassigned number range we want to modify.
We then use the NumberRangeStart (+14255551000) and NumberRangeEnd (+14255551900) parameters to modify the range of unassigned numbers to which the specified announcement or Auto Attendant will apply.


### -------------------------- Example 2 --------------------------
```
Get-CsUnassignedNumber | Where-Object {$_.AnnouncementName -match "Welcome"} | Set-CsUnassignedNumber -AnnouncementService ApplicationServer:redmond.litwareinc.com -AnnouncementName "Help Desk Announcement"
```

This example modifies the Announcement of all unassigned number range settings that currently have an Announcement with the string "Welcome" in the name.
First we call the `Get-CsUnassignedNumber` cmdlet to retrieve all unassigned number settings.
We pipe that collection of settings to the `Where-Object` cmdlet, which narrows down the collection to only those settings where the AnnouncementName property contains (-match) the string Welcome.
Once we have those settings, we pipe them to the `Set-CsUnassignedNumber` cmdlet, where we modify the Application Server ID of the Announcement Service (ApplicationServer:redmond.litwareinc.com) with the AnnouncementService parameter and the name of the new announcement (Help Desk Announcement) with the AnnouncementName parameter.
Note that even if the new Announcement has a different name but the same service ID, you must still specify the service ID along with the name.


## PARAMETERS

### -Identity
The unique name for the range of unassigned numbers being modified.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: RangeSpecification, AnnouncementService, Identity, AutoAttendant
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
A reference to an object containing unassigned number settings.
This object must be of type Microsoft.Rtc.Management.Voice.Helpers.DisplayAnnouncementVacantNumberRange and can be retrieved by calling the `Get-CsUnassignedNumber` cmdlet.

```yaml
Type: PSObject
Parameter Sets: RangeSpecification, AnnouncementService, AutoAttendant, Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AnnouncementName
The name of the Announcement that will be used to handle calls to this range of numbers.

```yaml
Type: String
Parameter Sets: AnnouncementService
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AnnouncementService
The fully qualified domain name (FQDN) or service ID of the Announcement server.

```yaml
Type: String
Parameter Sets: AnnouncementService
Aliases: AnnouncementServerFqdn
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExUmAutoAttendantPhoneNumber
The phone number of the Exchange Auto Attendant to route calls in this range to.
The Skype for Business Auto Attendant contact must already be set up in order to assign a value to this parameter.


```yaml
Type: String
Parameter Sets: AutoAttendant
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Parameter Sets: RangeSpecification, AnnouncementService, AutoAttendant
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
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
The phone number can be up to 17 digits and may be followed by and extension in the format ;ext= followed by the extension number.

```yaml
Type: String
Parameter Sets: RangeSpecification, AnnouncementService, AutoAttendant
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
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
Microsoft.Rtc.Management.Voice.Helpers.DisplayAnnouncementVacantNumberRange object.
Accepts pipelined input of unassigned number objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It modifies an object of type Microsoft.Rtc.Management.Voice.Helpers.DisplayAnnouncementVacantNumberRange.

## NOTES

## RELATED LINKS

[New-CsUnassignedNumber]()

[Remove-CsUnassignedNumber]()

[Get-CsUnassignedNumber]()

[New-CsAnnouncement]()

[Get-CsAnnouncement]()

[Get-CsExUmContact]()
