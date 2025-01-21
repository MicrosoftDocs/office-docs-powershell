---
schema: 2.0.0
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
online version:
Module Name: MicrosoftTeams
---
# Set-CsTeamsExternalAccessConfiguration

## SYNOPSIS

## SYNTAX

### Identity (Default)
```
Set-CsTeamsExternalAccessConfiguration [-BlockedUsers <List>] [-BlockExternalUserAccess <Boolean>] [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Allows admins to set values in the TeamsExternalAccessConfiguration, which specifies configs that can be used to improve entire org security. This configuration primarily allows admins to block malicious external users from the organization.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsExternalAccessConfiguration -Identity Global -BlockExternalAccessUserAccess $true
```

In this example, the admin has enabled the BlockExternalUserAccess. The users in the BlockedUsers will be blocked from communicating with the internal users.

### Example 2
```powershell
PS C:\> Set-CsTeamsExternalAccessConfiguration -Identity Global -BlockedUsers @("user1@malicious.com", "user2@malicious.com")
```

In this example, the admin has added two malicious users into the blocked list. These blocked users can't communicate with internal users anymore.

## PARAMETERS

### -BlockExternalAccessUserAccess
Designates whether BlockedUsers list is taking effect or not. $true means BlockedUsers are blocked and can't communicate with internal users.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockedUsers
You can specify blocked users using a List object that contains either the user email or the MRI from the external user you want to block. The user in the list will not able to communicate with the internal users in your organization.

```yaml
Type: List
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Bypass confirmation

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The only option is Global

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject
## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
