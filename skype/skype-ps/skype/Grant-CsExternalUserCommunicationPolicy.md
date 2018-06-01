---
external help file: 
applicable: Skype for Business Online
title: Grant-CsExternalUserCommunicationPolicy
schema: 2.0.0
---

# Grant-CsExternalUserCommunicationPolicy

## SYNOPSIS
Assigns a external user communication policy to one or more users or groups.

## SYNTAX

```
Grant-CsExternalUserCommunicationPolicy [[-Identity] <Object>] [[-PolicyName] <Object>] [-Confirm] [-PassThru] [-Tenant <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet assigns an existing external user communication policy to a user. External user communication policies are used to block P2P file transfer with Federated partners.

You can check whether a user has been granted an external user communication policy by calling a command in this format: `Get-CsOnlineUser "\<user name\>" | Select-Object ExternalUserCommunicationPolicy`.

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
PS C:\> Grant-CsExternalUserCommunicationPolicy -Identity "Ken Myer" -PolicyName BlockExternalP2PFileTransfer
```

This example assigns the external user communication policy with the Identity BlockExternalP2PFileTransfer to the user with the display name Ken Myer.

### -------------------------- Example 2 -------------------------- 
```
PS C:\> Get-CsOnlineUser -Filter {City -eq "Redmond"} | Grant-CsExternalUserCommunicationPolicy -PolicyName BlockExternalP2PFileTransfer
```

This example assigns the external user communication policy with the Identity BlockExternalP2PFileTransfer to all users in the city of Redmond. The first part of the command calls the Get-CsOnlineUser cmdlet to retrieve all users enabled for Skype for Business Online from the specified city. This collection of users is then piped to the Grant-CsExternalUserCommunicationPolicy cmdlet, which assigns the policy BlockExternalP2PFileTransfer to each of these users.

## PARAMETERS

### -PolicyName
The name (Identity) of the external user communication policy to be assigned to the user. (Note that this includes only the name portion of the Identity. Per-user policy identities include a prefix of tag: that should not be included with the PolicyName.)

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

### -Identity
Indicates the Identity of the user account to be retrieved. User Identities can be specified using one of the following formats: 1) the user's SIP address; 2) the user's user principal name (UPN); or, 3) the user's Active Directory display name (for example, Ken Myer).

You can use the asterisk (*) wildcard character when using the display name as the user Identity. For example, the Identity "*Smith" returns all the users who have a display name that ends with the string value "Smith".

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
Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.

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

## OUTPUTS

## NOTES

## RELATED LINKS
[New-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/new-csexternalusercommunicationpolicy?view=skype-ps)

[Get-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/get-csexternalusercommunicationpolicy?view=skype-ps)

[Remove-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/remove-csexternalusercommunicationpolicy?view=skype-ps)

[Set-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/set-csexternalusercommunicationpolicy?view=skype-ps)

