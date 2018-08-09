---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Grant-CsGraphPolicy
schema: 2.0.0
---

# Grant-CsGraphPolicy

## SYNOPSIS
Use the `Grant-CsGraphPolicy` cmdlet to assign a previously defined graph policy to a user or to your organization.
Graph policies determine whether users can pre-load content or files that are attached to an Outlook meeting invitation into a Skype for Business Online meeting.

## SYNTAX

```
Grant-CsGraphPolicy [[-Identity] <UserIdParameter>] [[-PolicyName] <String>] [-Confirm] [-DomainController <Fqdn>]
 [-PassThru] [-Tenant <Guid>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Online supports a Global CsGraphPolicy that is set by default to enable Outlook content pre-load in Skype for Business Online meetings.
The Global policy can't be changed by you.
Use the `Grant-CsGraphPolicy` cmdlet to assign a predefined graph policy to users in your organization.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "Grant-CsGraphPolicy"}`

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
Grant-CsGraphPolicy -PolicyName "GraphDisabled" -Identity Ken.Myer
```

This example grants the "GraphDisabled" policy to Ken Myer.


## PARAMETERS

### -PolicyName
Specifies the name of the graph policy to grant to the tenant or user.
The two options are:

Graph Enabled: Granting this policy will enable the pre-loading content or files that are attached to an Outlook meeting invitation into a Skype for Business Online meeting.
For example, `Grant-CsGraphPolicy -PolicyName "GraphEnabled".`

Graph Disabled: Granting this policy will disable the pre-loading of content, files or attachments attached to an Outlook meeting invitation into a Skype for Business Online meeting.
For example, `Grant-CsGraphPolicy -PolicyName "GraphDisabled".`

```yaml
Type: String
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
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
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
Type: UserIdParameter
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
Type: Guid
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
Indicates that this cmdlet runs as a background job.

When you specify the AsJob parameter, the command immediately returns an object that represents the background job. You can continue to work in the session while the job finishes. The job is created on the local computer and the results from the Skype for Business Online session are automatically returned to the local computer. To get the job results, use the Receive-Job cmdlet.

For more information about Windows PowerShell background jobs, see [about_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_jobs?view=powershell-6) and [about_Remote_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_jobs?view=powershell-6).

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
The Grant-CsGraphPolicy cmdlet accepts a pipelined string value representing the Identity of a user account to which the graph policy is being granted.

## OUTPUTS

###  
The Grant-CsGraphPolicy cmdlet returns an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADUserOrAppContact when used with the PassThru parameter.

## NOTES

## RELATED LINKS
[Get-CsGraphPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/get-csgraphpolicy?view=skype-ps)

