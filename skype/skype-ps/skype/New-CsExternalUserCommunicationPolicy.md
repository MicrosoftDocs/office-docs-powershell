---
external help file: 
applicable: Skype for Business Online
title: New-CsExternalUserCommunicationPolicy
schema: 2.0.0
---

# New-CsExternalUserCommunicationPolicy

## SYNOPSIS
Creates a new external user communication policy for use in your organization to block P2P file transfer with Federated partners only.

## SYNTAX

```
New-CsExternalUserCommunicationPolicy [[-Identity] <Object>] [-EnableP2PFileTransfer <Object>] [-Tenant <Object>] [-AsJob] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Before this cmdlet, Skype for Business Online already offered the ability to control P2P file transfer as part of the existing conferencing policy settings. However, this option allowed or blocked file transfer for users no matter if they are transferring files to a user who is hosted on the same company or Federated user.

This cmdlet allows you to block P2P file transfer with Federated partners only.

## EXAMPLES

### Example 1 
```
PS C:\> New-CsExternalUserCommunicationPolicy -Identity BlockExternalP2PFileTransfer -EnableP2PFileTransfer $False
```

This example creates a new policy to block external file transfer. Then you can use `Grant-CsExternalUserCommunicationPolicy` to assign it to an user account.

## PARAMETERS

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

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return your tenant ID by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Set-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/set-csexternalusercommunicationpolicy?view=skype-ps)

[Get-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/get-csexternalusercommunicationpolicy?view=skype-ps)

[Remove-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/remove-csexternalusercommunicationpolicy?view=skype-ps)

[Grant-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/grant-csexternalusercommunicationpolicy?view=skype-ps)
