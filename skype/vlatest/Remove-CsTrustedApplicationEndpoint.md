---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsTrustedApplicationEndpoint

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes a trusted application endpoint.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes a trusted application endpoint.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsTrustedApplicationEndpoint [-Identity] <UserIdParameter> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

A trusted application endpoint is an Active Directory contact object that enables routing of calls to a trusted application.
This cmdlet removes an existing endpoint contact object from Active Directory Domain Services (AD DS).

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsTrustedApplicationEndpoint cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsTrustedApplicationEndpoint"}

**Below Content Applies To:** Skype for Business Server 2015

A trusted application endpoint is an Active Directory contact object that enables routing of calls to a trusted application.
This cmdlet removes an existing endpoint contact object from Active Directory Domain Services.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsTrustedApplicationEndpoint -Identity "Endpoint 1"
```

This example removes the endpoint contact with the Identity (in this case the display name) Endpoint 1.
Because identities must be unique, this command will remove, at most, one endpoint.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example removes the endpoint contact with the Identity (in this case the display name) Endpoint 1.
Because identities must be unique, this command will remove, at most, one endpoint.

Remove-CsTrustedApplicationEndpoint -Identity "Endpoint 1"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example removes the endpoint contact with the Identity (in this case the display name) Endpoint 1.
Because identities must be unique, this command will remove, at most, one endpoint.

Remove-CsTrustedApplicationEndpoint -Identity "Endpoint 1"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsTrustedApplicationEndpoint -ApplicationId tapp2 | Remove-CsTrustedApplicationEndpoint
```

This example removes all trusted application endpoints associated with the application tapp2.
This is accomplished by first calling Get-CsTrustedApplicationEndpoint and passing the ID tapp2 to the ApplicationId parameter.
This will return a collection of endpoints that are associated with the tapp2 trusted application.
This collection is then piped to the Remove-CsTrustedApplicationEndpoint cmdlet, which removes each endpoint in the collection.
Keep in mind that this call to Get-CsTrustedApplicationEndpoint could retrieve endpoints with the application ID tapp2 from multiple pools, which would result in this command removing trusted application endpoints from multiple pools.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example removes all trusted application endpoints associated with the application tapp2.
This is accomplished by first calling Get-CsTrustedApplicationEndpoint and passing the ID tapp2 to the ApplicationId parameter.
This will return a collection of endpoints that are associated with the tapp2 trusted application.
This collection is then piped to the Remove-CsTrustedApplicationEndpoint cmdlet, which removes each endpoint in the collection.
Keep in mind that this call to Get-CsTrustedApplicationEndpoint could retrieve endpoints with the application ID tapp2 from multiple pools, which would result in this command removing trusted application endpoints from multiple pools.

Get-CsTrustedApplicationEndpoint -ApplicationId tapp2 | Remove-CsTrustedApplicationEndpoint

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example removes all trusted application endpoints associated with the application tapp2.
This is accomplished by first calling the Get-CsTrustedApplicationEndpoint cmdlet and passing the ID tapp2 to the ApplicationId parameter.
This will return a collection of endpoints that are associated with the tapp2 trusted application.
This collection is then piped to the Remove-CsTrustedApplicationEndpoint cmdlet, which removes each endpoint in the collection.
Keep in mind that this call to the Get-CsTrustedApplicationEndpoint cmdlet could retrieve endpoints with the application ID tapp2 from multiple pools, which would result in this command removing trusted application endpoints from multiple pools.

Get-CsTrustedApplicationEndpoint -ApplicationId tapp2 | Remove-CsTrustedApplicationEndpoint

## PARAMETERS

### -Identity
The Identity (the distinguished name of the contact), SIP address, or display name of the application endpoint to be removed.

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
Microsoft.Rtc.Management.ADConnect.Schema.OCSADApplicationContact object.
Accepts pipelined input of trusted application endpoint objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It removes an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADApplicationContact.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/c9b96690-d8c2-47f7-bff3-706dbf68d75a(OCS.14).aspx)

[New-CsTrustedApplicationEndpoint]()

[Set-CsTrustedApplicationEndpoint]()

[Get-CsTrustedApplicationEndpoint]()

[Online Version](http://technet.microsoft.com/EN-US/library/c9b96690-d8c2-47f7-bff3-706dbf68d75a(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/c9b96690-d8c2-47f7-bff3-706dbf68d75a(OCS.16).aspx)

