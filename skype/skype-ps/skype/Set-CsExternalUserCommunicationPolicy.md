---
external help file: 
applicable: Skype for Business Online
title: Set-CsExternalUserCommunicationPolicy
schema: 2.0.0
---

# Set-CsExternalUserCommunicationPolicy

## SYNOPSIS
Modifies the property values of an existing external user communication policy.

## SYNTAX

```
Set-CsExternalUserCommunicationPolicy [-EnableFileTransfer <Object>] [-AllowTitleVisibility <Object>]  [-Confirm] [-AllowPresenceVisibility <Object>] [-EnableP2PFileTransfer <Object>] [[-Identity] <Object>] [-Tenant <Object>] [-WhatIf] [-Force] [-Instance <Object>] [-AsJob]
```

## DESCRIPTION
This cmdlet modifies an existing external user communication policy. Use this cmdlet to change the setting that enables and disable the blocking of P2P file transfer with Federated partners.

## EXAMPLES

### -------------------------- Example 1 ------------------------
```
PS C:\> Set-CsExternalUserCommunicationPolicy -Identity BlockExternalP2PFileTransfer -EnableP2PFileTransfer $False
```

This example sets the EnableP2PFileTransfer property to False for the policy BlockExternalP2PFileTransfer, meaning any users assigned this policy are not enabled to send files to Federated partners.

### -------------------------- Example 2 ------------------------
```
PS C:\> Set-CsExternalUserCommunicationPolicy -EnableP2PFileTransfer $False
```

This example sets the EnableP2PFileTransfer property to False for the Global policy, meaning any users without assigned policy are not enabled to send files to Federated partners.

## PARAMETERS

### -AllowPresenceVisibility
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

### -AllowTitleVisibility
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

### -BypassDualWrite
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

### -EnableFileTransfer
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

### -EnableP2PFileTransfer
Indicates whether file transfers to Federated partners are allowed. The default value is True.

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

### -Force
This parameter is reserved for internal Microsoft use.

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

### -Instance
This parameter is reserved for internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

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

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[New-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/new-csexternalusercommunicationpolicy?view=skype-ps)

[Get-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/get-csexternalusercommunicationpolicy?view=skype-ps)

[Remove-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/remove-csexternalusercommunicationpolicy?view=skype-ps)

[Grant-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/grant-csexternalusercommunicationpolicy?view=skype-ps)
