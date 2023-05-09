---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/remove-csonlinetelephonenumber
Module Name: MicrosoftTeams
title: Remove-CsOnlineTelephoneNumber
schema: 2.0.0
manager: mreddy
author: TristanChen-msft
ms.author: jiaych
ms.reviewer: julienp
---

# Remove-CsOnlineTelephoneNumber

## SYNOPSIS
Use the `Remove-CsOnlineTelephoneNumber` cmdlet to remove one or more unassigned telephone numbers from your tenant.

## SYNTAX

```
Remove-CsOnlineTelephoneNumber -TelephoneNumber <String[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes one or more unassigned telephone numbers from your tenant. Invalid telephone numbers will be reported while valid telephone numbers will be removed from your tenant.

### -------------------------- Example 1 --------------------------
```
Remove-CsOnlineTelephoneNumber -TelephoneNumber 14258884567
```
```Output
NumberIdsDeleted NumberIdsAssigned NumberIdsDeleteFailed  NumberIdsNotOwnedByTenant NumberIdsManagedByServiceDesk
---------------- ----------------- --------------------- ------------------------- -----------------------------
{14258884567}    {}                    {}                        {}
```

This example removes the specified unassigned telephone number from the tenant.

### -------------------------- Example 2 --------------------------
```
[string[]]$tns="+14255551234","+14255551233"
Remove-CsOnlineTelephoneNumber -TelephoneNumber $tns
```
```Output
NumberIdsDeleted NumberIdsAssigned NumberIdsDeleteFailed  NumberIdsNotOwnedByTenant NumberIdsManagedByServiceDesk
---------------- ----------------- --------------------- ------------------------- -----------------------------
{14255551234,     {}                    {}                        {}
 14255551233}    
```

This example removes the specified list of unassigned telephone numbers from the tenant.


### -------------------------- Example 3 --------------------------
```
[string[]]$tns="+14255551234","+14255551233", "+14255550000", "+14255551111", "+14255552222"
Remove-CsOnlineTelephoneNumber -TelephoneNumber $tns
```
```Output
NumberIdsDeleted NumberIdsAssigned NumberIdsDeleteFailed  NumberIdsNotOwnedByTenant NumberIdsManagedByServiceDesk
---------------- ----------------- --------------------- ------------------------- -----------------------------
{14255551234,    {14255550000}     {}                     {14255551111}                        {14255552222}
 14255551233}    
```

This example removes the specified list of telephone numbers from the tenant. `+14255551234` and `+14255551233`were removed successfully. `+14255550000` failed to be removed because it was still assigned. `+14255551111` failed to be removed because it didn't belong to the tenant. `+14255552222` failed to be removed because it was managed by service desk.

## PARAMETERS

### -TelephoneNumber
Specifies the telephone number(s) to remove. The format can be withor without the prefixed +, but needs to include country code etc.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online, Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online, Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None

## OUTPUTS

###  
None

## NOTES
Invalid telephone numbers will be reported while valid telephone numbers will be removed from your tenant.

## RELATED LINKS
[Get-CsOnlineTelephoneNumber](Get-CsOnlineTelephoneNumber.md)
