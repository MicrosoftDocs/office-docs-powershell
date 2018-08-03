---
external help file: 
applicable: Skype for Business Online
title: Remove-CsCallingLineIdentity
schema: 2.0.0
---

# Remove-CsCallingLineIdentity

## SYNOPSIS
The Remove-CsCallingLineIdentity cmdlet removes a Caller ID policy.

## SYNTAX
```
Remove-CsCallingLineIdentity [[-Identity] <XdsIdentity>] [-Confirm] [-Force] [-Tenant <Guid>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
By default, the Skype for Business Online user's phone number can be seen when that user makes a call to a PSTN phone, or when a call comes in. You can create Caller ID policies to change this behavior, and you can use the Remove-CsCallingLineIdentity cmdlet to remove a Caller ID policy.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Remove-CsCallingLineIdentity -Identity CallerIDRedmond
```

This example removes the Caller ID policy with the Identity CallerIDRedmond.


## PARAMETERS

### -Identity
The Identity parameter identifies the Caller ID policy.

```yaml
Type: XdsIdentity
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

### -Force
The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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
Globally unique identifier (GUID) of the tenant account whose external user communication policy are being created. For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter. Instead, the tenant ID will automatically be filled in for you based on your connection information. The Tenant parameter is primarily for use in a hybrid deployment.

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
The WhatIf switch causes the command to simulate its results. By using this switch, you can view what changes would occur without having to commit those changes.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[Grant-CsCallingLineIdentity](https://docs.microsoft.com/en-us/powershell/module/skype/grant-cscallinglineidentity?view=skype-ps)

[Get-CsCallingLineIdentity](https://docs.microsoft.com/en-us/powershell/module/skype/get-cscallinglineidentity?view=skype-ps)

[Set-CsCallingLineIdentity](https://docs.microsoft.com/en-us/powershell/module/skype/set-cscallinglineidentity?view=skype-ps)

[New-CsCallingLineIdentity](https://docs.microsoft.com/en-us/powershell/module/skype/new-cscallinglineidentity?view=skype-ps)
