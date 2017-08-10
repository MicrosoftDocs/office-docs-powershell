---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsTrustedApplicationPool

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Retrieves settings for one or more pools that contain the computers that host trusted applications.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Retrieves settings for one or more pools that contain the computers that host trusted applications.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsTrustedApplicationPool [[-Identity] <XdsGlobalRelativeIdentity>] [-PoolFqdn <String>]
 [<CommonParameters>]
```

### Filter
```
Get-CsTrustedApplicationPool [-Filter <String>] [-PoolFqdn <String>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

It is recommended that computers that are running trusted applications within a Microsoft Lync Server 2010 deployment be added to a separate pool that is only for trusted applications.
However, you can add trusted application computers to an existing pool that is also used for other purposes.
This cmdlet retrieves one or more pools that have been defined as trusted application pools.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsTrustedApplicationPool cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsTrustedApplicationPool"}

**Below Content Applies To:** Lync Server 2013

It is recommended that computers that are running trusted applications within a Lync Server deployment be added to a separate pool that is only for trusted applications.
However, you can add trusted application computers to an existing pool that is also used for other purposes.
This cmdlet retrieves one or more pools that have been defined as trusted application pools.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsTrustedApplicationPool cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsTrustedApplicationPool"}

**Below Content Applies To:** Skype for Business Server 2015

It is recommended that computers that are running trusted applications within a Skype for Business Server 2015 deployment be added to a separate pool that is only for trusted applications.
However, you can add trusted application computers to an existing pool that is also used for other purposes.
This cmdlet retrieves one or more pools that have been defined as trusted application pools.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsTrustedApplicationPool
```

Example 1 retrieves all pools within the Lync Server 2010 deployment that have been defined as trusted application pools.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 retrieves all pools within the Lync Server deployment that have been defined as trusted application pools.

Get-CsTrustedApplicationPool

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 retrieves all pools within the Skype for Business Server 2015 deployment that have been defined as trusted application pools.

Get-CsTrustedApplicationPool

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsTrustedApplicationPool -Identity TrustPool.litwareinc.com
```

In this example, we've used the Identity parameter to ensure we retrieve only one trusted application pool, in this case the pool with the FQDN TrustPool.litwareinc.com.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In this example, we've used the Identity parameter to ensure we retrieve only one trusted application pool, in this case the pool with the FQDN TrustPool.litwareinc.com.

Get-CsTrustedApplicationPool -Identity TrustPool.litwareinc.com

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In this example, we've used the Identity parameter to ensure we retrieve only one trusted application pool, in this case the pool with the FQDN TrustPool.litwareinc.com.

Get-CsTrustedApplicationPool -Identity TrustPool.litwareinc.com

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsTrustedApplicationPool -Filter *:TrustPool.*
```

This example retrieves all trusted application pools that contain the site TrustPool in the pool FQDN.
The Filter parameter is used with a value of *:TrustPool.*.
This filter string will search the Identity values of all trusted application pools for those that contain the string ":TrustPool.".
For example, this command will retrieve the pool with the Identity value TrustedApplicationPool:TrustPool.litwareinc.com.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

This example retrieves all trusted application pools that contain the site TrustPool in the pool FQDN.
The Filter parameter is used with a value of *:TrustPool.*.
This filter string will search the Identity values of all trusted application pools for those that contain the string ":TrustPool.".
For example, this command will retrieve the pool with the Identity value TrustedApplicationPool:TrustPool.litwareinc.com.

Get-CsTrustedApplicationPool -Filter *:TrustPool.*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves all trusted application pools that contain the site TrustPool in the pool FQDN.
The Filter parameter is used with a value of *:TrustPool.*.
This filter string will search the Identity values of all trusted application pools for those that contain the string ":TrustPool.".
For example, this command will retrieve the pool with the Identity value TrustedApplicationPool:TrustPool.litwareinc.com.

Get-CsTrustedApplicationPool -Filter *:TrustPool.*

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsTrustedApplicationPool | Where-Object {$_.ServiceId -like "Redmond1*"}
```

The Filter parameter searches only on Identity, which in the case of trusted application pools is the service ID in the format TrustedApplicationPool:\<FQDN\>.
This example searches for pools based on service ID in the format \<site\>-ExternalServer-\<id\>; for example, Redmond1-ExternalServer-1.
This allows us to find trusted pools homed on a specific site.
The example begins by calling Get-CsTrustedApplicationPool with no parameters, which retrieves a collection of all trusted application pools.
This collection is then piped to the Where-Object cmdlet, which narrows down the collection to only those pools where the service ID ($_.ServiceId) matches the wildcard string (-like) Redmond1*.
The result will be a collection of all trusted application pools with FQDNs beginning with the string Redmond1, such as Redmond1-ExternalServer-1, Redmond1-ExternalServer-2, and Redmond1-ExternalServer-3.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

The Filter parameter searches only on Identity, which in the case of trusted application pools is the service ID in the format TrustedApplicationPool:\<FQDN\>.
This example searches for pools based on service ID in the format \<site\>-ExternalServer-\<id\>; for example, Redmond1-ExternalServer-1.
This allows us to find trusted pools homed on a specific site.
The example begins by calling Get-CsTrustedApplicationPool with no parameters, which retrieves a collection of all trusted application pools.
This collection is then piped to the Where-Object cmdlet, which narrows down the collection to only those pools where the service ID ($_.ServiceId) matches the wildcard string (-like) Redmond1*.
The result will be a collection of all trusted application pools with FQDNs beginning with the string Redmond1, such as Redmond1-ExternalServer-1, Redmond1-ExternalServer-2, and Redmond1-ExternalServer-3.

Get-CsTrustedApplicationPool | Where-Object {$_.ServiceId -like "Redmond1*"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

The Filter parameter searches only on Identity, which in the case of trusted application pools is the service ID in the format TrustedApplicationPool:\<FQDN\>.
This example searches for pools based on service ID in the format \<site\>-ExternalServer-\<id\>; for example, Redmond1-ExternalServer-1.
This allows us to find trusted pools homed on a specific site.
The example begins by calling the Get-CsTrustedApplicationPool cmdlet with no parameters, which retrieves a collection of all trusted application pools.
This collection is then piped to the Where-Object cmdlet, which narrows down the collection to only those pools where the service ID ($_.ServiceId) matches the wildcard string (-like) Redmond1*.
The result will be a collection of all trusted application pools with FQDNs beginning with the string Redmond1, such as Redmond1-ExternalServer-1, Redmond1-ExternalServer-2, and Redmond1-ExternalServer-3.

Get-CsTrustedApplicationPool | Where-Object {$_.ServiceId -like "Redmond1*"}

## PARAMETERS

### -Identity
The fully qualified domain name (FQDN) or service ID of the pool for which you want to retrieve settings.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
A string containing one or more wildcard characters that is used to search for a pool with an Identity that matches the wildcard string.
For example, specifying the string *Redmond* would retrieve all trusted application pools with identities containing the string Redmond, such as TrustedApplicationPool:Redmond.litwareinc.com.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PoolFqdn
The FQDN of the pool you want to retrieve.
This behaves the same as the Identity parameter, except that Identity also accepts a service ID.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
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
None.

## OUTPUTS

###  
Retrieves one or more objects of type Microsoft.Rtc.Management.Xds.DisplayExternalServer.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/f8dc4ad7-fc32-482b-a1cb-5ba106df3344(OCS.14).aspx)

[New-CsTrustedApplicationPool]()

[Remove-CsTrustedApplicationPool]()

[Set-CsTrustedApplicationPool]()

[Online Version](http://technet.microsoft.com/EN-US/library/f8dc4ad7-fc32-482b-a1cb-5ba106df3344(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/f8dc4ad7-fc32-482b-a1cb-5ba106df3344(OCS.16).aspx)

