---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Grant-CsDialoutPolicy
schema: 2.0.0
---

# Grant-CsDialoutPolicy

## SYNOPSIS
Use the `Grant-CsDialoutPolicy` cmdlet to assign a per-user outbound calling restriction policy to one or more users.

## SYNTAX
```
Grant-CsDialoutPolicy [[-Identity] <UserIdParameter>] [[-PolicyName] <string>] [-Confirm] [-DomainController <Fqdn>]
 [-PassThru] [-Tenant <Guid>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
In Skype for Business Online, outbound calling restriction policies are used to restrict the type of audio conferencing and end user PSTN calls that can be made by users in your organization.
To get all the available policies in your organization run `Get-CSOnlineDialOutPolicy`.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Grant-CsDialoutPolicy -Identity "ken.myer@contoso.com" -PolicyName "DialoutCPCandPSTNInternational"
```

This example assigns the per-user outbound calling restriction policy DialoutCPCandPSTNInternational to the user with the User Principal Name "ken.myer@contoso.com".

### -------------------------- Example 2 --------------------------
```
PS C:\> Grant-CsDialoutPolicy -Identity "ken.myer@contoso.com" -PolicyName $Null
```

In this example, any per-user outbound calling restriction policy previously assigned to the user ken.myer@contoso.com is unassigned from that user; as a result, Ken Myer will be managed by the global outbound calling restriction policy. To unassign a per-user policy, set the PolicyName to a null value ($Null).

### -------------------------- Example 3 --------------------------
```
PS C:\> Get-CsOnlineUser | Grant-CsDialoutPolicy -PolicyName "DialoutCPCInternationalPSTNDisabled"
```

This example assigns the per-user outbound calling restriction policy DialoutCPCInternationalPSTNDisabled to all the users in your organization.

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

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
Specifies the Identity of the user account to be to be modified. A user identity can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer) and 4) the user's Active Directory display name (for example, Ken Myer). You can also reference a user account by using the user's Active Directory distinguished name.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Returns the results of the command. By default, this cmdlet does not generate any output.

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

### -PolicyName
"Name" of the policy to be assigned. The PolicyName is simply the policy Identity minus the policy scope (the "tag:" prefix). For example, a policy with the Identity tag:Redmond has a PolicyName equal to Redmond; likewise, a policy with the Identity tag:RedmondPolicy has a PolicyName equal to RedmondPolicy.

To unassign a per-user policy previously assigned to a user, set the PolicyName to a null value ($Null).

```yaml
Type: String
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
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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

### Microsoft.Rtc.Management.AD.UserIdParameter

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Get-CSOnlineDialOutPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/get-csonlinedialoutpolicy?view=skype-ps)
