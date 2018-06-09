---
external help file: 
applicable: Skype for Business Online
title: Get-CsExternalUserCommunicationPolicy
schema: 2.0.0
---

# Get-CsExternalUserCommunicationPolicy

## SYNOPSIS

Returns information about one or more external user communication policies configured for your organization. 

## SYNTAX

```
Get-CsExternalUserCommunicationPolicy [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>] [-LocalStore] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves external user communication policy information. External user communication policies are used to block P2P file transfer with Federated partners.

## EXAMPLES

### -------------------------- Example 1 ------------------------
```
PS C:\> Get-CsExternalUserCommunicationPolicy
```

This example displays all the external user communication policies that have been defined for an organization along with the settings for each.

### -------------------------- Example 2 ------------------------
```
PS C:\> Get-CsExternalUserCommunicationPolicy -Identity BlockExternalP2PFileTransfer
```

This example uses the Identity parameter to retrieve the external user communication policy settings for the policy named BlockExternalP2PFileTransfer.

### -------------------------- Example 3 ------------------------
```
PS C:\> Get-CsExternalUserCommunicationPolicy -Filter tag*
```

This example uses the Filter parameter to retrieve all the external user communication policies along with the settings for each. All per-user external user communication policies have an Identity in the format tag:<ExternalUserCommunicationPolicy>.
 
### -------------------------- Example 4 ------------------------
```
PS C:\> Get-CsExternalUserCommunicationPolicy -Filter Block*
```

This example uses the Filter parameter to retrieve all the external user communication policies which their name begins with the string "Block" along with the configuration for each one.

## PARAMETERS

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

### -Filter
This parameter accepts a wildcard string and returns all external user communication policies with identities matching that string. For example, a Filter value of tag:* will return all external user communication policies excluding Global policy.

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
### -LocalStore
This parameter is reserved for internal Microsoft use.

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

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[New-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/new-csexternalusercommunicationpolicy?view=skype-ps)

[Set-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/set-csexternalusercommunicationpolicy?view=skype-ps)

[Remove-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/remove-csexternalusercommunicationpolicy?view=skype-ps)

[Grant-CsExternalUserCommunicationPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/grant-csexternalusercommunicationpolicy?view=skype-ps)
