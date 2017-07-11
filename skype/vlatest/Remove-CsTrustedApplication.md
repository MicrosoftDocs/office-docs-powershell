---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsTrustedApplication

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes a trusted application from the associated trusted service.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Removes a trusted application from the associated trusted service.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsTrustedApplication [-Identity] <ExternalApplicationIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

A trusted application is an application developed by a third party that is given trusted status to run as part of Microsoft Lync Server 2010 but that is not a built-in part of the product.
This cmdlet removes a trusted application from a trusted application pool.
Note that the application itself is not deleted, only the association with the trusted application pool and the trusted service is removed.

When you use this cmdlet to remove a trusted application, you must supply a value for the Identity parameter.
The Identity is the fully qualified domain name (FQDN) of the pool on which the application is homed followed by a slash (/) followed by the application ID.
For example, TrustPool.litwareinc.com/tapp2, where TrustPool.litwareinc.com is the pool FQDN and tapp2 is the application ID.
Note that if you view an existing application by calling Get-CsTrustedApplication you'll see an ID that looks more like this: TrustPool.litwareinc.com/urn:application:tapp2.
Notice the prefix urn:application: before the application name (tapp2).
While this prefix is part of the Identity, it's not required when you specify the value for the Identity parameter.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsTrustedApplication cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsTrustedApplication\b"}

Below Content Applies To: Lync Server 2013

A trusted application is an application developed by a third party that is given trusted status to run as part of Lync Server but that is not a built-in part of the product.
This cmdlet removes a trusted application from a trusted application pool.
Note that the application itself is not deleted, only the association with the trusted application pool and the trusted service is removed.

When you use this cmdlet to remove a trusted application, you must supply a value for the Identity parameter.
The Identity is the fully qualified domain name (FQDN) of the pool on which the application is homed followed by a slash (/) followed by the application ID.
For example, TrustPool.litwareinc.com/tapp2, where TrustPool.litwareinc.com is the pool FQDN and tapp2 is the application ID.
Note that if you view an existing application by calling Get-CsTrustedApplication you'll see an ID that looks more like this: TrustPool.litwareinc.com/urn:application:tapp2.
Notice the prefix urn:application: before the application name (tapp2).
While this prefix is part of the Identity, it's not required when you specify the value for the Identity parameter.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsTrustedApplication cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsTrustedApplication\b"}

Below Content Applies To: Skype for Business Server 2015

A trusted application is an application developed by a third party that is given trusted status to run as part of Skype for Business Server 2015 but that is not a built-in part of the product.
This cmdlet removes a trusted application from a trusted application pool.
Note that the application itself is not deleted, only the association with the trusted application pool and the trusted service is removed.

When you use this cmdlet to remove a trusted application, you must supply a value for the Identity parameter.
The Identity is the fully qualified domain name (FQDN) of the pool on which the application is homed followed by a slash (/) followed by the application ID.
For example, TrustPool.litwareinc.com/tapp2, where TrustPool.litwareinc.com is the pool FQDN and tapp2 is the application ID.
Note that if you view an existing application by calling the Get-CsTrustedApplication cmdlet you'll see an ID that looks more like this: TrustPool.litwareinc.com/urn:application:tapp2.
Notice the prefix urn:application: before the application name (tapp2).
While this prefix is part of the Identity, it's not required when you specify the value for the Identity parameter.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsTrustedApplication -Identity TrustPool.litwareinc.com/tapp2
```

This example removes the trusted application with the Identity TrustPool.litwareinc.com/tapp2 from the associated trusted service.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example removes the trusted application with the Identity TrustPool.litwareinc.com/tapp2 from the associated trusted service.

Remove-CsTrustedApplication -Identity TrustPool.litwareinc.com/tapp2

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example removes the trusted application with the Identity TrustPool.litwareinc.com/tapp2 from the associated trusted service.

Remove-CsTrustedApplication -Identity TrustPool.litwareinc.com/tapp2

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsTrustedApplication -Filter *trust* | Remove-CsTrustedApplication
```

Example 2 removes all trusted applications that have identities that include the string "trust".
The command begins with a call to Get-CsTrustedApplication, passing a Filter value of *trust*.
This command will retrieve all trusted applications with the string trust anywhere within the Identity.
The collection of trusted applications that is retrieved is then piped to the Remove-CsTrustedApplication cmdlet, which removes each one as a trusted application.
(Note that the application itself is not deleted; only the association with the trusted application pool and the trusted service is removed.)

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 removes all trusted applications that have identities that include the string "trust".
The command begins with a call to Get-CsTrustedApplication, passing a Filter value of *trust*.
This command will retrieve all trusted applications with the string trust anywhere within the Identity.
The collection of trusted applications that is retrieved is then piped to the Remove-CsTrustedApplication cmdlet, which removes each one as a trusted application.
(Note that the application itself is not deleted; only the association with the trusted application pool and the trusted service is removed.)

Get-CsTrustedApplication -Filter *trust* | Remove-CsTrustedApplication

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 removes all trusted applications that have identities that include the string "trust".
The command begins with a call to the Get-CsTrustedApplication cmdlet, passing a Filter value of *trust*.
This command will retrieve all trusted applications with the string trust anywhere within the Identity.
The collection of trusted applications that is retrieved is then piped to the Remove-CsTrustedApplication cmdlet, which removes each one as a trusted application.
(Note that the application itself is not deleted; only the association with the trusted application pool and the trusted service is removed.)

Get-CsTrustedApplication -Filter *trust* | Remove-CsTrustedApplication

## PARAMETERS

### -Identity
The unique identifier of the trusted application to be removed from the trusted application pool.
Identity values must be entered in the format \<pool FQDN\>/\<application ID\>, where pool FQDN is the FQDN of the pool on which the application resides, and application ID is the name of the application.

```yaml
Type: ExternalApplicationIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.Xds.DisplayTrustedApplication object.
Accepts pipelined input of trusted application objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It removes an object of type Microsoft.Rtc.Management.Xds.DisplayTrustedApplication.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/0d441b74-324b-4dab-8bd6-7d0a7eb18d28(OCS.14).aspx)

[New-CsTrustedApplication]()

[Set-CsTrustedApplication]()

[Get-CsTrustedApplication]()

[Online Version](http://technet.microsoft.com/EN-US/library/0d441b74-324b-4dab-8bd6-7d0a7eb18d28(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/0d441b74-324b-4dab-8bd6-7d0a7eb18d28(OCS.16).aspx)

