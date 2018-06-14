---
external help file: 
applicable: Skype for Business Online
title: Grant-CsIPPhonePolicy
schema: 2.0.0
---

# Grant-CsIPPhonePolicy

## SYNOPSIS
Use the Grant-CsIPPhonePolicy cmdlet to assign an Internet Protocol (IP) phone policy to a user or a group of users.
IP phone policies determine the features of Skype for Business Online that are available to users.
For example, you might enable the Better Together Over Ethernet feature for some users while disabling it for others.

## SYNTAX

```
Grant-CsIPPhonePolicy [[-Identity] <UserIdParameter>] [[-PolicyName] <XdsIdentity>] [-Confirm] [-DomainController <Fqdn>]
 [-PassThru] [-Tenant <Guid>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Online uses IP phone policies to determine the features and capabilities that are available to users.
IP phone policies are applied each time a user accesses the system, regardless of where the user logs on from.

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

Grant-CsIPPhonePolicy -Identity "Ken Myer" -PolicyName SkypePolicy
```

This example assigns the IP phone policy "SkypePolicy" to the user with the identity "Ken Myer".


### -------------------------- Example 2 -------------------------- 
```

Get-CsUser -LDAPFilter "Department=Sales" | Grant-CsIPPhonePolicy -PolicyName SalesPolicy
```

This example assigns all the users in the "Sales" department to the "SalesPolicy" IP phone policy.
The command first uses the Get-CsUser cmdlet and the LdapFilter parameter to return a collection of all the users who are members of the "Sales" department.
This collection of users is piped to the Grant-CsIPPhonePolicy cmdlet, which assigns "SalesPolicy" to each user in the collection.


## PARAMETERS

### -PolicyName
Specifies the name of the policy to be assigned.
The PolicyName is the policy Identity minus the policy scope ("tag:").
For example, a policy that has the identity "tag:Redmond" has a PolicyName equal to "Redmond".
If you set PolicyName to a null value, then the command will unassign any per-user policy assigned to the user.
For example: `Grant-CsIPPhonePolicy -Identity "Ken Myer" -PolicyName $Null`

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
Specifies the identity of the target user.
Acceptable values include:

Example: jphillips@contoso.com

Example: sip:jphillips@contoso.com

Example: 98403f08-577c-46dd-851a-f0460a13b03d

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
Including this switch enables you to pass a user object through the pipeline that represents the user account being assigned the voice routing policy.
By default, the Grant-CsIPPhonePolicy cmdlet does not pass objects through the pipeline.

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
-Tenant
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
The Grant-CsIPPhonePolicy cmdlet accepts pipelined input of Microsoft.Rtc.Management.ADConnect.Schema.ADUser objects.

## OUTPUTS

###  
By default, the Grant-CsIPPhonePolicy cmdlet returns no objects or values.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSUserOrAppContact object.

## NOTES

## RELATED LINKS

[Get-CsIPPhonePolicy](Get-CsIPPhonePolicy.md)

[Set-CsIPPhonePolicy](Set-CsIPPhonePolicy.md)


