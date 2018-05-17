---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Move-CsApplicationEndpoint
schema: 2.0.0
---

# Move-CsApplicationEndpoint

## SYNOPSIS

Moves an endpoint to a different Registrar pool.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Move-CsApplicationEndpoint [-Identity] <UserIdParameter> [-TargetApplicationPool] <Fqdn>
 [-DomainController <Fqdn>] [-Force] [-PassThru] [-WhatIf] [-Confirm] [-IgnoreBackendStoreException]
 [<CommonParameters>]
```

## DESCRIPTION

This cmdlet moves an existing endpoint contact object in Active Directory Domain Services to a Skype for Business Server application pool.
The application associated with the given endpoint must exist on the target pool.
To determine which application is associated with the endpoint, run the Get-CsTrustedApplicationEndpoint cmdlet.

This cmdlet is also used to upgrade the Active Directory contact object properties when an application is retargeted against Skype for Business Server.
Note that the source and target application pool will be the same in that case.
Also, if an application originally designed to work against Skype for Business Server is directly deployed against Skype for Business Server, then this cmdlet must be used with the Force flag to upgrade the Active Directory contact object properties.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

Move-CsApplicationEndpoint -Identity sip:endpoint1@litwareinc.com -TargetApplicationPool TrustPoolA.litwareinc.com
```

This example moves the application endpoint contact object with the SIP address endpoint1@litwareinc.com to the trusted Registrar pool TrustPoolA.litwareinc.com.
Use this command to upgrade a UCMA 2.0 application to a Skype for Business Server application after coexistence.


### -------------------------- EXAMPLE 2 -------------------------- 
```

Move-CsApplicationEndpoint -Identity sip:endpoint2@litwareinc.com -TargetApplicationPool TrustPoolA.litwareinc.com -Force
```

This example moves the application endpoint contact object with the SIP address endpoint2@litwareinc.com to the trusted Registrar pool TrustPoolA.litwareinc.com.
This example differs from Example 1 in that this command includes the Force parameter.
Use this command for an in-place migration of a UCMA 2.0 application or for direct deployment of a UCMA 2.0 application against a pure Skype for Business Server deployment.
This will update an existing object in Active Directory with the necessary attributes so that routing can occur through the Skype for Business Server Registrar.


## PARAMETERS

### -Identity
The SIP address or distinguished name (DN) of the endpoint contact you want to move.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

This flag is required if you are moving a Microsoft Unified Communications Managed API (UCMA) 2.0 contact object to the same pool but on a Skype for Business Server deployment.
This will force routing to occur through the Skype for Business Server Registrar.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
String.
Accepts a pipelined string value representing the Identity of an application endpoint.

## OUTPUTS

###  
When used with the PassThru parameter, returns an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADApplicationContact.

## NOTES

## RELATED LINKS

[Get-CsApplicationEndpoint](Get-CsApplicationEndpoint.md)

