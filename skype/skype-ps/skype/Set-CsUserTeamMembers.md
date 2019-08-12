---
external help file: Microsoft.Rtc.Management.dll-help.xml
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
This cmdlet modifies the specified user’s team members list, returns an object containing the team member list and displays the object on the screen, in case of success.

## SYNTAX

```
Set-CsUserTeamMembers -Team <System.Management.Automation.PSListModifier`1[System.String]> [-User] <String>
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The feature enables the use of SEFAUtil functionality in PowerShell. SEFAUtil (Secondary Extension Feature Activation) enables Skype server administrators and helpdesk agents to configure delegate-ringing, call-forwarding and Group Call Pickup settings on behalf of a Skype server user. This tool also allows administrators to query the call-routing settings that are published for a particular user. 
The cmdlets introduced in this feature can only be run by members of the following groups for On-prem deployments, per the access level specified below:
•	CsAdministrator – Get and Set for all cmdlets
•	CsVoiceAdministrator - Get and Set for all cmdlets
•	CsServerAdministrator - Get and Set for all cmdlets
•	CsHelpDesk - Get for all cmdlets
Server auto-discovery needs to be enabled. There are no additional licensing requirements for use of the cmdlets.

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2019CU1

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Team
Specifies list of team members that calls will be forwarded to. The add and remove switches will add and remove specified users from the Team Members list. The replace parameter will set the list to the specified list, wiping out the previous list. Add and remove can be used together, but neither of them can be used along with replace. 
Acceptable input formats for add/remove/replace list: The inputs can be a single user address (in one of the below formats), or a comma separated list of user addresses, in the 4 standard formats that Identity parameter accepts.

```yaml
Type: System.Management.Automation.PSListModifier`1[System.String]
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2019CU1

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
Specifies the SIP address of the user whose settings are required. 
Acceptable input formats: The input can be a single user address, in any of the 4 standard formats accepted by -User parameter.


```yaml
Type: String
Parameter Sets: (All)
Aliases: DisplayName, SipAddress, Identity
Applicable: Skype for Business Server 2019CU1

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```


### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
