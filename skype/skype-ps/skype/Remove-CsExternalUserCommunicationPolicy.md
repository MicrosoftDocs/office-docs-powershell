---
external help file: 
applicable: Skype for Business Online
title: Remove-CsExternalUserCommunicationPolicy
schema: 2.0.0
---

# Remove-CsExternalUserCommunicationPolicy

## SYNOPSIS
Removes the specified external user communication policy.

## SYNTAX

```
Remove-CsExternalUserCommunicationPolicy [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Confirm] [-Force] [-Tenant <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]

```

## DESCRIPTION
This cmdlet removes an existing external user communication policy. External user communication policies are used to block P2P file transfer with Federated partners. This cmdlet can also be used to remove the global external user communication policy. In that case, however, the policy will not actually be removed; instead, the policy settings will simply be reset to their default values.

## EXAMPLES

### -------------------------- Example 1 ------------------------
```
PS C:\> Remove-CsExternalUserCommunicationPolicy -Identity ExternalUserCommunicationPolicy1
```

This example removes the ExternalUserCommunicationPolicy1 policy.

### -------------------------- Example 2 ------------------------
```
PS C:\> Get-CsExternalUserCommunicationPolicy -Filter tag* | Remove-CsExternalUserCommunicationPolicy
```

This example removes all the external user communication policies that can be assigned to specific users. First the `Get-CsExternalUserCommunicationPolicy` cmdlet is called with a Filter of tag*, which retrieves all the per-user policies excluding Global policy. That collection of policies is then piped to the `Remove-CsExternalUserCommunicationPolicy` cmdlet to be removed.

## PARAMETERS

### -BypassDualWrite
{{Fill BypassDualWrite Description}}

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

### -Confirm
Prompts you for confirmation before executing the command.

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
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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

### -Identity
Unique identifier for the external user communication policy to be created.

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

### -Tenant
Globally unique identifier (GUID) of the tenant account whose external user communication policy are being created. For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter. Instead, the tenant ID will automatically be filled in for you based on your connection information. The Tenant parameter is primarily for use in a hybrid deployment.

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
Shows what would happen if the cmdlet runs. The cmdlet is not run.

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

### Microsoft.Rtc.Management.Xds.XdsIdentity

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[New-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/new-csexternalusercommunicationpolicy?view=skype-ps)

[Get-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/get-csexternalusercommunicationpolicy?view=skype-ps)

[Grant-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/grant-csexternalusercommunicationpolicy?view=skype-ps)

[Set-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/set-csexternalusercommunicationpolicy?view=skype-ps)
