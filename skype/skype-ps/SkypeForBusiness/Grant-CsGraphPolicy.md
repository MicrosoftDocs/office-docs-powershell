---
applicable: Lync Server 2010
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/grant-csgraphpolicy
schema: 2.0.0
title: Grant-CsGraphPolicy
---

# Grant-CsGraphPolicy

## SYNOPSIS
Use the Grant-CsGraphPolicy cmdlet to assign a previously defined graph policy to a user or to your organization.
Graph policies determine whether users can pre-load content or files that are attached to an Outlook meeting invitation into a Microsoft Teams or Skype for Business Online meeting,

## SYNTAX

### Identity (Default)
```
Grant-CsGraphPolicy [[-Identity] <UserIdParameter>] [-PolicyName] <String> [-Tenant <Guid>]
 [-DomainController <Fqdn>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsGraphPolicy [-PolicyName] <String> [-Tenant <Guid>] [-DomainController <Fqdn>] [-PassThru]
 [-Global] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Microsoft Teams and Skype for Business Online support a Global CsGraphPolicy that is set by default to enable Outlook content pre-load in Microsoft Teams or Skype for Business Online meetings.
The Global policy can't be changed by you.
Use the Grant-CsGraphPolicy cmdlet to assign a predefined graph policy to users in your organization.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "<DesiredCmdletName>"}`

## EXAMPLES

### Example 1
```
Grant-CsGraphPolicy -PolicyName "GraphDisabled" -Identity Ken.Myer
```

This example grants the "GraphDisabled" policy to Ken Myer.


## PARAMETERS

### -DomainController

> Applicable: Microsoft Teams

Specifies the domain controller that's used by the cmdlet to read or write the specified data.
Valid inputs for this parameter are either the fully qualified domain name (FQDN) or the computer name.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Microsoft Teams

Specifies the identity of the user who will be granted the graph policy.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru

> Applicable: Microsoft Teams

Enables you to pass a user object through the pipeline that represents the user account being assigned the policy.

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

### -PolicyName

> Applicable: Microsoft Teams

Specifies the name of the graph policy to grant to the tenant or user.
The two options are:

Graph Enabled: Granting this policy will enable the pre-loading content or files that are attached to an Outlook meeting invitation into a Microsoft Teams or Skype for Business Online meeting.
For example, `Grant-CsGraphPolicy -PolicyName "Graph Enabled"`.

Graph Disabled: Granting this policy will disable the pre-loading of content, files or attachments attached to an Outlook meeting invitation into a Microsoft Teams or Skype for Business Online meeting.
For example, `Grant-CsGraphPolicy -PolicyName "Graph Disabled"`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

> Applicable: Microsoft Teams

This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Microsoft Teams

The Confirm switch causes the command to pause processing, and requires confirmation to proceed.

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

> Applicable: Microsoft Teams

The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### System.String
The Grant-CsGraphPolicy cmdlet accepts a pipelined string value representing the Identity of a user account to which the graph policy is being granted.

## OUTPUTS

### Microsoft.Rtc.Management.ADConnect.Schema.OCSADUserOrAppContact
The Grant-CsGraphPolicy cmdlet returns an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADUserOrAppContact when used with the PassThru parameter.

## NOTES

## RELATED LINKS
