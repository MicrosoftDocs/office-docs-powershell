---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/set-csuserteammembers
applicable: Skype for Business Server 2019
title: Set-CsUserTeamMembers
schema: 2.0.0
manager: rogupta
author: hirenshah1
ms.author: hirshah
ms.reviewer:
---

# Set-CsUserTeamMembers

## SYNOPSIS
Used to modify an user’s team members list.

## SYNTAX

```
Set-CsUserTeamMembers -Team <PSListModifier> [-User] <String>
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The feature enables the use of SEFAUtil (Secondary Extension Feature Activation) functionality in PowerShell. SEFAUtil enables Skype server administrators and helpdesk agents to configure delegate-ringing, call-forwarding and Group Call Pickup settings on behalf of a Skype server user. This tool also allows administrators to query the call-routing settings that are published for a particular user. The cmdlets introduced in this feature can only be run by members of the following groups for On-prem deployments, per the access level specified below: CsAdministrator - Get and Set for all cmdlets, CsVoiceAdministrator - Get and Set for all cmdlets, CsServerAdministrator - Get and Set for all cmdlets, CsHelpDesk - Get for all cmdlets Server auto-discovery needs to be enabled. There are no additional licensing requirements for use of the cmdlets. For more information see [Using SEFAUtil functionality via PowerShell in Skype for Business Server 2019](https://docs.microsoft.com/skypeforbusiness/sefautil-functionality).

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsUserTeamMembers -User "Ken.Myer@contoso.com" -Team @{add='ChewDavid@contoso.com','dmx@contoso.com'}
```

This cmdlet adds two other users to the specified user’s team members list, returns an object that contains the team member list and displays the object on the screen, in case of success. In case of failure, an appropriate error message will be shown.

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

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

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -Team
Specifies list of team members. The add and remove switches will add and remove specified users from the Team Members list. The replace parameter will set the list to the specified list, wiping out the previous list. Add and remove can be used together, but neither of them can be used along with replace. Acceptable input formats for add/remove/replace list: The inputs can be a single user address (in one of the below formats), or a comma separated list of user addresses, in the 4 standard formats that Identity parameter accepts.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
Indicates the Identity of the user account to be modified. User Identities can be specified using one of four formats: 1) the SIP address; 2) the user principal name (UPN); 3) the domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer) and 4) the Active Directory display name (for example, Ken Myer). User Identities can also be referenced by using the user's Active Directory distinguished name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: DisplayName, SipAddress, Identity

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

### System.String

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
