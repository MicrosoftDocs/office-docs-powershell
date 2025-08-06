---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-place
schema: 2.0.0
title: Get-Place
---

# Get-Place

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-Place cmdlet to view the additional metadata that was configured on room mailboxes by using the Set-Place cmdlet. The additional metadata provides a better search and room suggestion experience.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Get-Place [[-Identity] <RecipientIdParameter>]
 [-Confirm]
 [-ResultSize <Unlimited>]
 [-WhatIf]
 [<CommonParameters>]
```

### AllPlaces
```
Get-Place [-Type <GetPlaceType>]
 [-Confirm]
 [-ResultSize <Unlimited>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-Place -Identity "Conference Room 01"
```

This example returns summary metadata for the room mailbox named Conference Room 1.

### Example 2
```powershell
Get-Place -Identity "Conference Room 01" | Format-List
```

This example returns detailed metadata for Conference Room 1.

### Example 3
```powershell
Get-Place -Type Room
```

This example returns all room mailboxes.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the room mailbox that you want to view. You can use any value that uniquely identifies the room. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can't use this parameter with the Type parameter.

```yaml
Type: RecipientIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type

> Applicable: Exchange Online

The Type parameter filters the results by the type of room mailbox. Valid values are:

- Room
- RoomList
- Space

You can't use this parameter with the Identity parameter.

```yaml
Type: GetPlaceType
Parameter Sets: AllPlaces
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
