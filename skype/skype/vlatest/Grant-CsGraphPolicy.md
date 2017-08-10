---
external help file: 
applicable: Skype for Business Online
schema: 2.0.0
---

# Grant-CsGraphPolicy

## SYNOPSIS
Use the Grant-CsGraphPolicy cmdlet to assign a previously defined graph policy to a user or to your organization.
Graph policies determine whether users can pre-load content or files that are attached to an Outlook meeting invitation into a Skype for Business Online meeting,

## SYNTAX

```
Grant-CsGraphPolicy [[-Identity] <Object>] [[-PolicyName] <Object>] [-Confirm] [-DomainController <Object>]
 [-PassThru] [-Tenant <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Online supports a Global CsGraphPolicy that is set by default to enable Outlook content pre-load in Skype for Business Online meetings.
The Global policy can't be changed by you.
Use the Grant-CsGraphPolicy cmdlet to assign a predefined graph policy to users in your organization.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command:

Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Online)
```

```

This example grants the "GraphDisabled" policy to Ken Myer.

Grant-CsGraphPolicy -PolicyName "GraphDisabled" -Identity Ken.Myer

## PARAMETERS

### -PolicyName
Specifies the name of the graph policy to grant to the tenant or user.
The two options are:

Graph Enabled: Granting this policy will enable the pre-loading content or files that are attached to an Outlook meeting invitation into a Skype for Business Online meeting.
For example, Grant-CsGraphPolicy -PolicyName "Graph Enabled".

Graph Disabled: Granting this policy will disable the pre-loading of content, files or attachments attached to an Outlook meeting invitation into a Skype for Business Online meeting.
For example, Grant-CsGraphPolicy -PolicyName "Graph Disabled".

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing, and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Specifies the domain controller that's used by the cmdlet to read or write the specified data.
Valid inputs for this parameter are either the fully qualified domain name (FQDN) or the computer name.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the identity of the user who will be granted the graph policy.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user account being assigned the policy.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
The Grant-CsGraphPolicy cmdlet accepts a pipelined string value representing the Identity of a user account to which the graph policy is being granted.

## OUTPUTS

###  
The Grant-CsGraphPolicy cmdlet returns an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADUserOrAppContact when used with the PassThru parameter.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/67d74914-c00a-4aa3-a873-29ddb9708d35(OCS.15).aspx)

