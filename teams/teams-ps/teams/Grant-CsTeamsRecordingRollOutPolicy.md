---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: Microsoft.Teams.Policy.Administration.Cmdlets.Core
online version: https://learn.microsoft.com/powershell/module/teams/grant-csteamsrecordingrolloutpolicy
schema: 2.0.0
applicable: Microsoft Teams
title: Grant-CsTeamsRecordingRollOutPolicy
manager: yujin1
author: ronwa
ms.author: ronwa
---

# Grant-CsTeamsRecordingRollOutPolicy

## SYNOPSIS
The CsTeamsRecordingRollOutPolicy controls roll out of the change that governs the storage for meeting recordings.

## SYNTAX

```
Grant-CsTeamsRecordingRollOutPolicy -Identity <String> -PolicyName <String> [<CommonParameters>]
```

## DESCRIPTION
The CsTeamsRecordingRollOutPolicy controls roll out of the change that governs the storage for meeting recordings. This policy would be deprecated over time as this is only to allow IT admins to phase the roll out of this breaking change.

The Grant-CsTeamsRecordingRollOutPolicy cmdlet allows administrators to assign a CsTeamsRecordingRollOutPolicy at the per-user scope.

This command is available from Teams powershell module 6.1.1-preview and above.

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsTeamsMeetingPolicy -identity "Ken Myer" -PolicyName OrganizerPolicy
```

In this example, a user with identity "Ken Myer" is being assigned the OrganizerPolicy

## PARAMETERS

### -Identity
Indicates the Identity of the user account the policy should be assigned to. User Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer). User Identities can also be referenced by using the user's Active Directory distinguished name.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
The name of the custom policy that is being assigned to the user. To remove a specific assignment and fall back to the default tenant policy, you can assign to $Null.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
