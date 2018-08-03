---
external help file: 
applicable: Skype for Business Online
title: Grant-CsCallingLineIdentity
schema: 2.0.0
---

# Grant-CsCallingLineIdentity

## SYNOPSIS
The `Grant-CsCallingLineIdentity` cmdlet assigns a Caller ID policy to one or more users.

## SYNTAX

```
Grant-CsCallingLineIdentity [[-Identity] <UserIdParameter>] [[-PolicyName] <String>] [-Confirm] [-DomainController <Fqdn>] [-PassThru] [-Tenant <Guid>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
By default, the Skype for Business Online user's phone number can be seen when that user makes a call to a PSTN phone, or when a call comes in. You can create Caller ID policies to change this behavior, and you can use the Grant-CsCallingLineIdentity cmdlet to assign a Caller ID policy to one or more users in your organization.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Grant-CsCallingLineIdentity -Identity "Ken Myer" -PolicyName CallerIDRedmond
```

This example assigns the Caller ID policy with the Identity CallerIDRedmond to the user with the display name Ken Myer.

### -------------------------- Example 2 --------------------------
```
PS C:\> Get-CsUser -OU "ou=Finance,ou=North America,dc=litwareinc,dc=com" | Grant-CsCallingLineIdentity -PolicyName CallerIDRedmond
```

This example assigns the Caller ID policy with the Identity CallerIDRedmond to all users in the Finance OU: OU=Finance,OU=NorthAmerica,DC=litwareinc,DC=com. The first part of the command calls the Get-CsUser cmdlet to retrieve all users enabled for Skype for Business Server from the specified OU. This collection of users is then piped to the Grant-CsCallingLineIdentity cmdlet, which assigns the policy CallerIDRedmond to each of these users.

## PARAMETERS

### -Identity
The Identity (unique identifier) of the user to whom the policy is being assigned. User Identities can be specified using one of the following formats: 1) the user's SIP address; 2) the user's user principal name (UPN); or, 3) the user's Active Directory display name (for example, Ken Myer).

You can use the asterisk (\*) wildcard character when using the Display Name as the user Identity. For example, the Identity "\*Smith" returns all the users who have a display name that ends with the string value "Smith".

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

### -PolicyName
The name (Identity) of the Caller ID policy to be assigned to the user. (Note that this includes only the name portion of the Identity. Per-user policy identities include a prefix of tag: that should not be included with the PolicyName).

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[Set-CsCallingLineIdentity](https://docs.microsoft.com/en-us/powershell/module/skype/set-cscallinglineidentity?view=skype-ps)

[Get-CsCallingLineIdentity](https://docs.microsoft.com/en-us/powershell/module/skype/get-cscallinglineidentity?view=skype-ps)

[Remove-CsCallingLineIdentity](https://docs.microsoft.com/en-us/powershell/module/skype/remove-cscallinglineidentity?view=skype-ps)

[New-CsCallingLineIdentity](https://docs.microsoft.com/en-us/powershell/module/skype/new-cscallinglineidentity?view=skype-ps)

