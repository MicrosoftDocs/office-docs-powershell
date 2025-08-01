---
applicable: Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/set-csuserdelegates
schema: 2.0.0
title: Set-CsUserDelegates
---

# Set-CsUserDelegates

## SYNOPSIS
Used to modify a user's delegates list.

## SYNTAX

```
Set-CsUserDelegates -Delegates <PSListModifier> [-User] <String>
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The feature enables the use of SEFAUtil functionality in PowerShell. SEFAUtil (Secondary Extension Feature Activation) enables Skype server administrators and helpdesk agents to configure delegate-ringing, call-forwarding and Group Call Pickup settings on behalf of a Skype server user. This tool also allows administrators to query the call-routing settings that are published for a particular user. The cmdlets introduced in this feature can only be run by members of the following groups for On-prem deployments, per the access level specified below: CsAdministrator - Get and Set for all cmdlets, CsVoiceAdministrator - Get and Set for all cmdlets, CsServerAdministrator - Get and Set for all cmdlets, CsHelpDesk - Get for all cmdlets Server auto-discovery needs to be enabled. There are no additional licensing requirements for use of the cmdlets. For more information see [Using SEFAUtil functionality via PowerShell in Skype for Business Server 2019](https://learn.microsoft.com/skypeforbusiness/sefautil-functionality).

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsUserDelegates -Delegates @{add='ChewDavid@contoso.com','dmx@contoso.com'} -User "Ken.Myer@contoso.com"
```

This cmdlet modifies the specified user's delegation settings, returns an object of delegates list and displays the list of delegates, in case of success. In case of failure, an appropriate error message will be shown.

## PARAMETERS

### -Delegates
Specifies list of delegates. The add and remove switches will add and remove specified users from the delegates list. The replace parameter will set the list to the specified list, wiping out the previous list. Add and remove can be used together, but neither of them can be used along with replace. Acceptable input formats for add/remove/replace list: The inputs can be a single user address (in one of the below formats), or a comma separated list of user addresses, in the 4 standard formats that Identity parameter accepts.

```yaml
Type: System.Management.Automation.PSListModifier`1[System.String]
Parameter Sets: (All)
Aliases:

Required: True
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

### -User
Indicates the Identity of the user account to be modified. User Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer) and 4) the user's Active Directory display name (for example, Ken Myer). User Identities can also be referenced by using the user's Active Directory distinguished name.

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
