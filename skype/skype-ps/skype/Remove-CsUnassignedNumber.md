---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsUnassignedNumber

## SYNOPSIS
Removes an existing range of unassigned numbers and the routing rules that apply to those numbers.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsUnassignedNumber [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Unassigned numbers are phone numbers that have been assigned to an organization but that have not been assigned to specific users or phones.
Skype for Business Server can be set up to route calls to appropriate destinations when an unassigned number is called.
This cmdlet removes the settings that define that routing.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsUnassignedNumber -Identity UNSet1
```

In this example, the unassigned number settings with the Identity UNSet1 are removed.


### -------------------------- Example 2 --------------------------
```
Get-CsUnassignedNumber | Where-Object {$_.AnnouncementName -match "Welcome"} | Remove-CsUnassignedNumber
```

Example 2 removes all unassigned number settings where the name of the assigned announcement contains the string Welcome.
The command begins with a call to the `Get-CsUnassignedNumber` cmdlet, which returns a collection of all unassigned number settings.
This collection is then passed to the `Where-Object` cmdlet, which narrows down the collection to only those unassigned number settings with an AnnouncementName that includes (-match) the string Welcome.
Finally, the narrowed-down collection is passed to the `Remove-CsUnassignedNumber` cmdlet, which removes everything left in the collection.


## PARAMETERS

### -Identity
The unique name for the range of unassigned numbers you want to remove.

```yaml
Type: XdsGlobalRelativeIdentity
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
Microsoft.Rtc.Management.Voice.Helpers.DisplayAnnouncementVacantNumberRange object.
Accepts pipelined input of unassigned number objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It removes an object of type Microsoft.Rtc.Management.Voice.Helpers.DisplayAnnouncementVacantNumberRange.

## NOTES

## RELATED LINKS

[New-CsUnassignedNumber]()

[Set-CsUnassignedNumber]()

[Get-CsUnassignedNumber]()

[Get-CsAnnouncement]()

[Get-CsExUmContact]()
