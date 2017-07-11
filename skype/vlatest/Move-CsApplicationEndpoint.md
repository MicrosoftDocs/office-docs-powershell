---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Move-CsApplicationEndpoint

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Moves an endpoint to a different Registrar pool.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Moves an endpoint to a different Registrar pool.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Move-CsApplicationEndpoint [-Identity] <UserIdParameter> [-TargetApplicationPool] <Fqdn>
 [-DomainController <Fqdn>] [-Force] [-PassThru] [-WhatIf] [-Confirm] [-IgnoreBackendStoreException]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

This cmdlet moves an existing endpoint contact object in Active Directory Domain Services (AD DS) from a Microsoft Office Communications Server 2007 R2 application pool to a Microsoft Lync Server 2010 application pool, or from one Lync Server 2010 application pool to another.
The application associated with the given endpoint must exist on the target pool.
To determine which application is associated with the endpoint, run the Get-CsTrustedApplicationEndpoint or Get-CsDialInConferencingAccessNumber cmdlet.

This cmdlet is also used to upgrade the Active Directory contact object properties when an application deployed against Office Communications Server 2007 R2 is retargeted against Lync Server 2010.
Note that the source and target application pool will be the same in that case.
Also, if an application originally designed to work against Office Communications Server 2007 R2 is directly deployed against Lync Server 2010, then this cmdlet must be used with the Force flag to upgrade the Active Directory contact object properties.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Move-CsApplicationEndpoint cmdlet locally: RTCUniversalUserAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Move-CsApplicationEndpoint"}

Below Content Applies To: Lync Server 2013

This cmdlet moves an existing endpoint contact object in Active Directory Domain Services (AD DS) from a Microsoft Office Communications Server 2007 R2 application pool to a Lync Server application pool, or from one Lync Server application pool to another.
The application associated with the given endpoint must exist on the target pool.
To determine which application is associated with the endpoint, run the Get-CsTrustedApplicationEndpoint or Get-CsDialInConferencingAccessNumber cmdlet.

This cmdlet is also used to upgrade the Active Directory contact object properties when an application deployed against Office Communications Server 2007 R2 is retargeted against Lync Server.
Note that the source and target application pool will be the same in that case.
Also, if an application originally designed to work against Office Communications Server 2007 R2 is directly deployed against Lync Server, then this cmdlet must be used with the Force flag to upgrade the Active Directory contact object properties.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Move-CsApplicationEndpoint cmdlet locally: RTCUniversalUserAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Move-CsApplicationEndpoint"}

Below Content Applies To: Skype for Business Server 2015

This cmdlet moves an existing endpoint contact object in Active Directory Domain Services to a Skype for Business Server 2015 application pool.
The application associated with the given endpoint must exist on the target pool.
To determine which application is associated with the endpoint, run the Get-CsTrustedApplicationEndpoint cmdlet.

This cmdlet is also used to upgrade the Active Directory contact object properties when an application is retargeted against Skype for Business Server 2015.
Note that the source and target application pool will be the same in that case.
Also, if an application originally designed to work against Skype for Business Server 2015 is directly deployed against Skype for Business Server 2015, then this cmdlet must be used with the Force flag to upgrade the Active Directory contact object properties.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Move-CsApplicationEndpoint -Identity sip:endpoint1@litwareinc.com -TargetApplicationPool TrustPoolA.litwareinc.com
```

This example moves the application endpoint contact object with the SIP address endpoint1@litwareinc.com to the trusted Registrar pool TrustPoolA.litwareinc.com.
Use this command to upgrade a UCMA 2.0 application to a Microsoft Unified Communications Managed API (UCMA) 3.0 application after coexistence.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example moves the application endpoint contact object with the SIP address endpoint1@litwareinc.com to the trusted Registrar pool TrustPoolA.litwareinc.com.
Use this command to upgrade a UCMA 2.0 application to a Lync Server application after coexistence.

Move-CsApplicationEndpoint -Identity sip:endpoint1@litwareinc.com -TargetApplicationPool TrustPoolA.litwareinc.com

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example moves the application endpoint contact object with the SIP address endpoint1@litwareinc.com to the trusted Registrar pool TrustPoolA.litwareinc.com.
Use this command to upgrade a UCMA 2.0 application to a Skype for Business Server 2015 application after coexistence.

Move-CsApplicationEndpoint -Identity sip:endpoint1@litwareinc.com -TargetApplicationPool TrustPoolA.litwareinc.com

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Move-CsApplicationEndpoint -Identity sip:endpoint2@litwareinc.com -TargetApplicationPool TrustPoolA.litwareinc.com -Force
```

This example moves the application endpoint contact object with the SIP address endpoint2@litwareinc.com to the trusted Registrar pool TrustPoolA.litwareinc.com.
This example differs from Example 1 in that this command includes the Force parameter.
Use this command for an in-place migration of a UCMA 2.0 application or for direct deployment of a UCMA 2.0 application against a pure Lync Server 2010 deployment.
This will update an existing object in Active Directory with the necessary attributes so that routing can occur through the Lync Server 2010 Registrar.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example moves the application endpoint contact object with the SIP address endpoint2@litwareinc.com to the trusted Registrar pool TrustPoolA.litwareinc.com.
This example differs from Example 1 in that this command includes the Force parameter.
Use this command for an in-place migration of a UCMA 2.0 application or for direct deployment of a UCMA 2.0 application against a pure Lync Server deployment.
This will update an existing object in Active Directory with the necessary attributes so that routing can occur through the Lync Server Registrar.

Move-CsApplicationEndpoint -Identity sip:endpoint2@litwareinc.com -TargetApplicationPool TrustPoolA.litwareinc.com -Force

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example moves the application endpoint contact object with the SIP address endpoint2@litwareinc.com to the trusted Registrar pool TrustPoolA.litwareinc.com.
This example differs from Example 1 in that this command includes the Force parameter.
Use this command for an in-place migration of a UCMA 2.0 application or for direct deployment of a UCMA 2.0 application against a pure Skype for Business Server 2015 deployment.
This will update an existing object in Active Directory with the necessary attributes so that routing can occur through the Skype for Business Server 2015 Registrar.

Move-CsApplicationEndpoint -Identity sip:endpoint2@litwareinc.com -TargetApplicationPool TrustPoolA.litwareinc.com -Force

## PARAMETERS

### -Identity
The SIP address or distinguished name (DN) of the endpoint contact you want to move.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -TargetApplicationPool
The fully qualified domain name (FQDN) of the pool to which the endpoint is moving.
The target pool must have a Registrar service dependency.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: Target
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Allows you to specify a domain controller.
If no domain controller is specified, the first available will be used.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Below Content Applies To: Lync Server 2010

This flag is required if you are moving a Microsoft Unified Communications Managed API (UCMA) 2.0 contact object to the same pool but on a Lync Server 2010 deployment.
This will force routing to occur through the Lync Server 2010 Registrar.



Below Content Applies To: Lync Server 2013

This flag is required if you are moving a Microsoft Unified Communications Managed API (UCMA) 2.0 contact object to the same pool but on a Lync Server deployment.
This will force routing to occur through the Lync Server Registrar.



Below Content Applies To: Skype for Business Server 2015

This flag is required if you are moving a Microsoft Unified Communications Managed API (UCMA) 2.0 contact object to the same pool but on a Skype for Business Server 2015 deployment.
This will force routing to occur through the Skype for Business Server 2015 Registrar.



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

### -PassThru
Specifying this parameter will return the application endpoint object after the object has been moved.

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

### -IgnoreBackendStoreException
When present, instructs the computer to ignore any errors that might occur with the backend database and attempt to move the application endpoint despite those errors.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
String.
Accepts a pipelined string value representing the Identity of an application endpoint.

## OUTPUTS

###  
When used with the PassThru parameter, returns an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADApplicationContact.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/0f5a5b7a-aca5-4672-b712-d47683e28caf(OCS.14).aspx)

[Get-CsApplicationEndpoint]()

[Online Version](http://technet.microsoft.com/EN-US/library/0f5a5b7a-aca5-4672-b712-d47683e28caf(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/0f5a5b7a-aca5-4672-b712-d47683e28caf(OCS.16).aspx)

