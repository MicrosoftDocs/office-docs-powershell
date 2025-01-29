---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/new-csusercallingdelegate
applicable: Microsoft Teams
author: serdarsoysal
ms.author: serdars
ms.reviewer:
manager:
schema: 2.0.0
---

# New-CsUserCallingDelegate

## SYNOPSIS
This cmdlet will add a new delegate for calling in Microsoft Teams.

## SYNTAX

### Identity (Default)
```powershell
New-CsUserCallingDelegate -Identity <String> -Delegate <String> -MakeCalls <Boolean> -ReceiveCalls <Boolean> -ManageSettings <Boolean> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet adds a new delegate with given permissions for the specified user.

## EXAMPLES

### Example 1
```powershell
New-CsUserCallingDelegate -Identity user1@contoso.com -Delegate user2@contoso.com -MakeCalls $true -ReceiveCalls $true -ManageSettings $true
```

## PARAMETERS

### -Delegate
The Identity of the delegate to add. Can be specified using the ObjectId or the SIP address.

A user can have up to 25 delegates.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity of the user to add a delegate for. Can be specified using the ObjectId or the SIP address.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MakeCalls

Specifies whether delegate is allowed to make calls on behalf of the specified user.

```yaml
Type: System.Boolean
Parameter Sets: All
Aliases:

Required: True
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManageSettings

Specifies whether delegate is allowed to change the delegate and calling settings for the specified user.

```yaml
Type: System.Boolean
Parameter Sets: All
Aliases:

Required: True
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReceiveCalls

Specifies whether delegate is allowed to receive calls on behalf of the specified user.

```yaml
Type: System.Boolean
Parameter Sets: All
Aliases:

Required: True
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction,
and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES
The cmdlet is available in Teams PowerShell module 4.0.0 or later.

The specified user need to have the Microsoft Phone System license assigned.

You can see the delegate of a user by using the Get-CsUserCallingSettings cmdlet.

## RELATED LINKS
[Get-CsUserCallingSettings](https://learn.microsoft.com/powershell/module/teams/get-csusercallingsettings)

[Set-CsUserCallingDelegate](https://learn.microsoft.com/powershell/module/teams/set-csusercallingdelegate)

[Remove-CsUserCallingDelegate](https://learn.microsoft.com/powershell/module/teams/remove-csusercallingdelegate)
