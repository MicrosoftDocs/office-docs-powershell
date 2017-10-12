---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Remove-CsTrustedApplicationEndpoint
schema: 2.0.0
---

# Remove-CsTrustedApplicationEndpoint

## SYNOPSIS
Removes a trusted application endpoint.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsTrustedApplicationEndpoint [-Identity] <UserIdParameter> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
A trusted application endpoint is an Active Directory contact object that enables routing of calls to a trusted application.
This cmdlet removes an existing endpoint contact object from Active Directory Domain Services.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Remove-CsTrustedApplicationEndpoint -Identity "Endpoint 1"
```

This example removes the endpoint contact with the Identity (in this case the display name) Endpoint 1.
Because identities must be unique, this command will remove, at most, one endpoint.


### -------------------------- Example 2 ------------------------
```
Get-CsTrustedApplicationEndpoint -ApplicationId tapp2 | Remove-CsTrustedApplicationEndpoint
```

This example removes all trusted application endpoints associated with the application tapp2.
This is accomplished by first calling the `Get-CsTrustedApplicationEndpoint` cmdlet and passing the ID tapp2 to the ApplicationId parameter.
This will return a collection of endpoints that are associated with the tapp2 trusted application.
This collection is then piped to the `Remove-CsTrustedApplicationEndpoint` cmdlet, which removes each endpoint in the collection.
Keep in mind that this call to the `Get-CsTrustedApplicationEndpoint` cmdlet could retrieve endpoints with the application ID tapp2 from multiple pools, which would result in this command removing trusted application endpoints from multiple pools.


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

[New-CsTrustedApplicationEndpoint](New-CsTrustedApplicationEndpoint.md)

[Set-CsTrustedApplicationEndpoint](Set-CsTrustedApplicationEndpoint.md)

[Get-CsTrustedApplicationEndpoint](Get-CsTrustedApplicationEndpoint.md)
