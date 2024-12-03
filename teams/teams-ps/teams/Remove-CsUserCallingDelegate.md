---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/remove-csusercallingdelegate
applicable: Microsoft Teams
author: jenstrier
ms.author: serdars
ms.reviewer:
manager:
schema: 2.0.0
---

# Remove-CsUserCallingDelegate

## SYNOPSIS
This cmdlet will remove a delegate for calling in Microsoft Teams.

## SYNTAX

### Identity (Default)
```powershell
Remove-CsUserCallingDelegate -Identity <String> -Delegate <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet will remove a delegate for the specified user.

## EXAMPLES

### Example 1
```powershell
Remove-CsUserCallingDelegate -Identity user1@contoso.com -Delegate user2@contoso.com
```
This example shows removing the delegate user2@contoso.com.

## PARAMETERS

### -Delegate
The Identity of the delegate to remove. Can be specified using the ObjectId or the SIP address.

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
The Identity of the user to remove a delegate for. Can be specified using the ObjectId or the SIP address.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Default value: None
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

[New-CsUserCallingDelegate](https://learn.microsoft.com/powershell/module/teams/new-csusercallingdelegate)

[Set-CsUserCallingDelegate](https://learn.microsoft.com/powershell/module/teams/set-csusercallingdelegate)
