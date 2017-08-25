---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsTrustedApplicationPool

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes a pool that contains the computers that host trusted applications.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes a pool that contains the computers that host trusted applications.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsTrustedApplicationPool [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

It is recommended that the computers that are running trusted applications within a Microsoft Lync Server 2010 deployment be added to a separate pool that is only for trusted applications.
However, you can add trusted application computers to an existing pool that is also used for other purposes.
This cmdlet removes an existing trusted application pool.
However, you cannot remove a trusted application pool that does not have a Registrar value.
If the trusted application pool has not been assigned a Registrar, you must add a Registrar value with the Set-CsTrustedApplicationPool cmdlet, and then remove the pool.

Keep in mind that removing the pool also removes all computers, applications, and application endpoints associated with that pool.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsTrustedApplicationPool cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsTrustedApplicationPool"}

**Below Content Applies To:** Lync Server 2013

It is recommended that the computers that are running trusted applications within a Lync Server deployment be added to a separate pool that is only for trusted applications.
However, you can add trusted application computers to an existing pool that is also used for other purposes.
This cmdlet removes an existing trusted application pool.
However, you cannot remove a trusted application pool that does not have a Registrar value.
If the trusted application pool has not been assigned a Registrar, you must add a Registrar value with the Set-CsTrustedApplicationPool cmdlet, and then remove the pool.

Keep in mind that removing the pool also removes all computers, applications, and application endpoints associated with that pool.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsTrustedApplicationPool cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsTrustedApplicationPool"}

**Below Content Applies To:** Skype for Business Server 2015

It is recommended that the computers that are running trusted applications within a Skype for Business Server 2015 deployment be added to a separate pool that is only for trusted applications.
However, you can add trusted application computers to an existing pool that is also used for other purposes.
This cmdlet removes an existing trusted application pool.
However, you cannot remove a trusted application pool that does not have a Registrar value.
If the trusted application pool has not been assigned a Registrar, you must add a Registrar value with the Set-CsTrustedApplicationPool cmdlet, and then remove the pool.

Keep in mind that removing the pool also removes all computers, applications, and application endpoints associated with that pool.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsTrustedApplicationPool -Identity TrustPool.litwareinc.com
```

This example removes the pool with the FQDN TrustPool.litwareinc.com.
We use the Identity parameter to specify the FQDN of the pool we want to remove.
Because identities are unique, this command will remove, at most, one pool.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example removes the pool with the FQDN TrustPool.litwareinc.com.
We use the Identity parameter to specify the FQDN of the pool we want to remove.
Because identities are unique, this command will remove, at most, one pool.

Remove-CsTrustedApplicationPool -Identity TrustPool.litwareinc.com

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example removes the pool with the FQDN TrustPool.litwareinc.com.
We use the Identity parameter to specify the FQDN of the pool we want to remove.
Because identities are unique, this command will remove, at most, one pool.

Remove-CsTrustedApplicationPool -Identity TrustPool.litwareinc.com

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsTrustedApplicationPool | Where-Object {$_.PoolFqdn -match "trust*"} | Remove-CsTrustedApplicationPool
```

This example removes all trusted pools where the FQDN of the pool begins with the string "trust".
The first part of the command is a call to the Get-CsTrustedApplicationPool cmdlet, which retrieves a collection of all trusted application pools in your Lync Server 2010 infrastructure.
This collection is piped to the Where-Object cmdlet.
The Where-Object cmdlet checks each item in the collection to see whether the PoolFqdn matches the wildcard string trust*.
This will result in a collection of all trusted application pools with a PoolFqdn that begins with the string trust followed by any character or characters.
Finally, this collection is piped to the Remove-CsTrustedApplicationPool cmdlet, which removes every item in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example removes all trusted pools where the FQDN of the pool begins with the string "trust".
The first part of the command is a call to the Get-CsTrustedApplicationPool cmdlet, which retrieves a collection of all trusted application pools in your Lync Server infrastructure.
This collection is piped to the Where-Object cmdlet.
The Where-Object cmdlet checks each item in the collection to see whether the PoolFqdn matches the wildcard string trust*.
This will result in a collection of all trusted application pools with a PoolFqdn that begins with the string trust followed by any character or characters.
Finally, this collection is piped to the Remove-CsTrustedApplicationPool cmdlet, which removes every item in the collection.

Get-CsTrustedApplicationPool | Where-Object {$_.PoolFqdn -match "trust*"} | Remove-CsTrustedApplicationPool

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example removes all trusted pools where the FQDN of the pool begins with the string "trust".
The first part of the command is a call to the Get-CsTrustedApplicationPool cmdlet, which retrieves a collection of all trusted application pools in your Skype for Business Server 2015 infrastructure.
This collection is piped to the Where-Object cmdlet.
The Where-Object cmdlet checks each item in the collection to see whether the PoolFqdn matches the wildcard string trust*.
This will result in a collection of all trusted application pools with a PoolFqdn that begins with the string trust followed by any character or characters.
Finally, this collection is piped to the Remove-CsTrustedApplicationPool cmdlet, which removes every item in the collection.

Get-CsTrustedApplicationPool | Where-Object {$_.PoolFqdn -match "trust*"} | Remove-CsTrustedApplicationPool

## PARAMETERS

### -Identity
The fully qualified domain name (FQDN) or service ID of the pool you want to remove.

```yaml
Type: XdsGlobalRelativeIdentity
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
Microsoft.Rtc.Management.Xds.DisplayExternalServer object.
Accepts pipelined input of trusted application pool objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It removes an object of type Microsoft.Rtc.Management.Xds.DisplayExternalServer.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/93aa3381-e3fc-45df-840e-3d6d61a52fb3(OCS.14).aspx)

[New-CsTrustedApplicationPool]()

[Set-CsTrustedApplicationPool]()

[Get-CsTrustedApplicationPool]()

[Online Version](http://technet.microsoft.com/EN-US/library/93aa3381-e3fc-45df-840e-3d6d61a52fb3(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/93aa3381-e3fc-45df-840e-3d6d61a52fb3(OCS.16).aspx)

