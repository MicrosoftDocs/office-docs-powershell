---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsTrustedApplicationPool

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Creates a new pool that will contain the computers that host trusted applications.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Creates a new pool that will contain the computers that host trusted applications.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsTrustedApplicationPool [-Identity] <XdsGlobalRelativeIdentity> [-AppSharingPortCount <UInt16>]
 [-AppSharingPortStart <UInt16>] [-AudioPortCount <UInt16>] [-AudioPortStart <UInt16>] [-ComputerFqdn <Fqdn>]
 [-OutboundOnly <Boolean>] [-Registrar <String>] [-RequiresReplication <Boolean>] [-Site <String>]
 [-ThrottleAsServer <Boolean>] [-TreatAsAuthenticated <Boolean>] [-VideoPortCount <UInt16>]
 [-VideoPortStart <UInt16>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

It is recommended that the computers that are running trusted applications within a Microsoft Lync Server 2010 deployment be added to a separate pool that is only for trusted applications.
However, you can add trusted application computers to an existing pool that is also used for other purposes.
If the pool already exists as part of the topology, this cmdlet creates the external service associated with that pool (with a service role of ExternalServer).
If the pool does not exist, this cmdlet creates the pool and the corresponding service.
(You can find a list of all existing pools by calling the Get-CsPool cmdlet.)

Creating a new trusted application pool (a new external service) also creates a new trusted application computer assigned to that pool.
By default the computer will be assigned the same fully qualified domain name (FQDN) as the pool.
However, you can specify your own value for the FQDN by using the ComputerFqdn parameter of this cmdlet.
If you plan to add more computers to the pool, you must specify a ComputerFqdn value that is different from the FQDN of the pool.
To add more computers to the pool, call the New-CsTrustedApplicationComputer cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsTrustedApplicationPool cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsTrustedApplicationPool"}

Below Content Applies To: Lync Server 2013

We recommend that the computers that are running trusted applications within a Lync Server deployment be added to a separate pool that is only for trusted applications.
However, you can add trusted application computers to an existing pool that is also used for other purposes.
If the pool already exists as part of the topology, this cmdlet creates the external service associated with that pool (with a service role of ExternalServer).
If the pool does not exist, this cmdlet creates the pool and the corresponding service.
(You can find a list of all existing pools by calling the Get-CsPool cmdlet.)

Creating a new trusted application pool (a new external service) also creates a new trusted application computer assigned to that pool.
By default the computer will be assigned the same fully qualified domain name (FQDN) as the pool.
However, you can specify your own value for the FQDN by using the ComputerFqdn parameter of this cmdlet.
If you plan to add more computers to the pool, you must specify a ComputerFqdn value that is different from the FQDN of the pool.
To add more computers to the pool, call the New-CsTrustedApplicationComputer cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsTrustedApplicationPool cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsTrustedApplicationPool"}

Below Content Applies To: Skype for Business Server 2015

We recommend that the computers that are running trusted applications within a Skype for Business Server 2015 deployment be added to a separate pool that is only for trusted applications.
However, you can add trusted application computers to an existing pool that is also used for other purposes.
If the pool already exists as part of the topology, this cmdlet creates the external service associated with that pool (with a service role of ExternalServer).
If the pool does not exist, this cmdlet creates the pool and the corresponding service.
(You can find a list of all existing pools by calling the Get-CsPool cmdlet.)

Creating a new trusted application pool (a new external service) also creates a new trusted application computer assigned to that pool.
By default the computer will be assigned the same fully qualified domain name (FQDN) as the pool.
However, you can specify your own value for the FQDN by using the ComputerFqdn parameter of this cmdlet.
If you plan to add more computers to the pool, you must specify a ComputerFqdn value that is different from the FQDN of the pool.
To add more computers to the pool, call the New-CsTrustedApplicationComputer cmdlet.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
New-CsTrustedApplicationPool -Identity TrustPool.litwareinc.com -Registrar pool0.litwareinc.com -Site Redmond
```

This example creates a new pool with the FQDN TrustPool.litwareinc.com.
We use the Identity parameter to specify the new FQDN.
We use the Registrar parameter with a value of pool0.litwareinc.com to associate the new pool with the Registrar service at that FQDN.
Finally, we use the Site parameter with a value of Redmond to specify that this pool will be part of the Redmond site.

Note that the Site value is the SiteId (which can be retrieved by calling Get-CsSite).
However, the site Identity will be stored with the new trusted application pool.
For example, if a site has an Identity of site:Redmond1 and a SiteId of NA, you must use NA as the value of the Site parameter in your call to New-CsTrustedApplicationPool.
However, if you want to later find all trusted application pools for the NA site, you would use the Identity value in your where clause, like this:

Get-CsTrustedApplicationPool | Where-Object {$_.SiteId -eq "site:Redmond1"}

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example creates a new pool with the FQDN TrustPool.litwareinc.com.
We use the Identity parameter to specify the new FQDN.
We use the Registrar parameter with a value of pool0.litwareinc.com to associate the new pool with the Registrar service at that FQDN.
Finally, we use the Site parameter with a value of Redmond to specify that this pool will be part of the Redmond site.

Note that the Site value is the SiteId (which can be retrieved by calling Get-CsSite).
However, the site Identity will be stored with the new trusted application pool.
For example, if a site has an Identity of site:Redmond1 and a SiteId of NA, you must use NA as the value of the Site parameter in your call to New-CsTrustedApplicationPool.
However, if you want to later find all trusted application pools for the NA site, you would use the Identity value in your where clause, like this:

Get-CsTrustedApplicationPool | Where-Object {$_.SiteId -eq "site:Redmond1"}

New-CsTrustedApplicationPool -Identity TrustPool.litwareinc.com -Registrar pool0.litwareinc.com -Site Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example creates a new pool with the FQDN TrustPool.litwareinc.com.
We use the Identity parameter to specify the new FQDN.
We use the Registrar parameter with a value of pool0.litwareinc.com to associate the new pool with the Registrar service at that FQDN.
Finally, we use the Site parameter with a value of Redmond to specify that this pool will be part of the Redmond site.

Note that the Site value is the SiteId (which can be retrieved by calling the Get-CsSite cmdlet).
However, the site Identity will be stored with the new trusted application pool.
For example, if a site has an Identity of site:Redmond1 and a SiteId of NA, you must use NA as the value of the Site parameter in your call to the New-CsTrustedApplicationPool cmdlet.
However, if you want to later find all trusted application pools for the NA site, you would use the Identity value in your where clause, like this:

Get-CsTrustedApplicationPool | Where-Object {$_.SiteId -eq "site:Redmond1"}

New-CsTrustedApplicationPool -Identity TrustPool.litwareinc.com -Registrar pool0.litwareinc.com -Site Redmond

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
New-CsTrustedApplicationPool -Identity TrustPool.litwareinc.com -Registrar Registrar:redmond.litwareinc.com -Site Redmond -ComputerFqdn AppServer.litwareinc.com
```

Example 2 is identical to Example 1 except that instead of specifying an FQDN for the Registrar service we've used the service ID, Registrar:redmond.litwareinc.com.
In addition, we've specified a value for the ComputerFqdn parameter.
When a pool is created, a computer is also created within that pool.
By default the computer will have the same FQDN as the pool.
We've specified a different FQDN, AppServer.litwareinc.com, for the computer that is in this pool.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 is identical to Example 1 except that instead of specifying an FQDN for the Registrar service we've used the service ID, Registrar:redmond.litwareinc.com.
In addition, we've specified a value for the ComputerFqdn parameter.
When a pool is created, a computer is also created within that pool.
By default the computer will have the same FQDN as the pool.
We've specified a different FQDN, AppServer.litwareinc.com, for the computer that is in this pool.

New-CsTrustedApplicationPool -Identity TrustPool.litwareinc.com -Registrar Registrar:redmond.litwareinc.com -Site Redmond -ComputerFqdn AppServer.litwareinc.com

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 is identical to Example 1 except that instead of specifying an FQDN for the Registrar service we've used the service ID, Registrar:redmond.litwareinc.com.
In addition, we've specified a value for the ComputerFqdn parameter.
When a pool is created, a computer is also created within that pool.
By default the computer will have the same FQDN as the pool.
We've specified a different FQDN, AppServer.litwareinc.com, for the computer that is in this pool.

New-CsTrustedApplicationPool -Identity TrustPool.litwareinc.com -Registrar Registrar:redmond.litwareinc.com -Site Redmond -ComputerFqdn AppServer.litwareinc.com

## PARAMETERS

### -Identity
The FQDN of the new pool.
Note that while the Identity value for creating a pool is the pool FQDN, the value that will be stored as the Identity with the new pool is actually an automatically generated service ID of the pool.
The Identity entered here will be saved as the PoolFqdn.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppSharingPortCount
The number of ports available in the port range for application sharing connections.

Default: 0

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppSharingPortStart
The number of the first port in the port range available for application sharing connections.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudioPortCount
The number of ports available in the port range for audio connections.

Default: 0

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudioPortStart
The number of the first port in the port range available for audio connections.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ComputerFqdn
Creating a trusted application pool will automatically create a trusted application computer that is part of that pool.
By default the computer will receive the same FQDN as the pool.
Enter a value in this parameter to specify an FQDN for the computer that is different from the pool FQDN.
If you plan to add more computers to the pool, you must enter a value for this parameter that is different from the pool FQDN.

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

### -OutboundOnly
Specifies whether a trusted application can initiate a connection to a server within the pool.
Set this value to True if you want all connections to be initiated by the server rather than the application.

Default: False

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Registrar
The service ID or FQDN of the Registrar service for the pool.

Note that even though this parameter is optional, if you attempt to create a new trusted application endpoint (by using the New-CsTrustedApplicationEndpoint cmdlet) and assign the endpoint to a pool that does not have a Registrar dependency, you'll receive an error and the endpoint will not be created.
In addition, you cannot remove a trusted application pool that is not associated with a Registrar.

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

### -RequiresReplication
Below Content Applies To: Lync Server 2010

Determines whether replication is required for this pool.
Set this value to False if replication is not required.
You would normally set this parameter to False for Microsoft Outlook Web Access and manually-provisioned applications.

Default: True



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Determines whether replication is required for this pool.
Set this value to False if replication is not required.
You would usually set this parameter to False for Microsoft Outlook Web Access and manually-provisioned applications.

Default: True



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Site
Below Content Applies To: Lync Server 2010, Lync Server 2013

The Site ID of the site on which this pool is homed.
Call the Get-CsSite cmdlet to retrieve the SiteId property of a site.
Keep in mind that you must use the SiteId property rather than the Identity of the site.
Also note that you must not precede the SiteId with the string "site:", you must enter only the SiteId.
In addition, although you enter the SiteId retrieved from Get-CsSite, the SiteId property of the new trusted application pool will contain the site Identity.
For example, if the SiteId for the site is Main and the site Identity is site:Redmond1, you must enter -Site Main in your call to New-CsTrustedApplicationPool, but a subsequent call to Get-CsTrustedApplicationPool will show the SiteId as site:Redmond1.

If the pool specified in the Identity already exists you do not need to specify a Site.
If the pool doesn't exist, this parameter is required.



Below Content Applies To: Skype for Business Server 2015

The Site ID of the site on which this pool is homed.
Call the Get-CsSite cmdlet to retrieve the SiteId property of a site.
Keep in mind that you must use the SiteId property rather than the Identity of the site.
Also note that you must not precede the SiteId with the string "site:", you must enter only the SiteId.
In addition, although you enter the SiteId retrieved from the Get-CsSite cmdlet, the SiteId property of the new trusted application pool will contain the site Identity.
For example, if the SiteId for the site is Main and the site Identity is site:Redmond1, you must enter -Site Main in your call to the New-CsTrustedApplicationPool cmdlet, but a subsequent call to the Get-CsTrustedApplicationPool cmdlet will show the SiteId as site:Redmond1.

If the pool specified in the Identity already exists you do not need to specify a Site.
If the pool doesn't exist, this parameter is required.



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

### -ThrottleAsServer
Set this parameter to false to throttle connections between the servers within the pool and trusted applications as clients.
This places greater restrictions on the connections than the default True, which throttles connections as servers.
Throttling a connection places restrictions on the number of transactions that can occur at once.

Default: True

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TreatAsAuthenticated
Determines whether authentication is required for trusted applications connecting to servers within the pool.
Set this parameter to False if you want to require trusted applications to be authenticated.
The default value of True allows the trusted applications to connect under the assumption they've already been authenticated.

Default: True

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VideoPortCount
The number of ports available in the port range for video connections.

Default: 0

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VideoPortStart
The number of the first port in the port range available for video connections.

```yaml
Type: UInt16
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
None.

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.Xds.DisplayExternalServer.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/30117225-d82b-494b-8bc2-da5d539bdd6b(OCS.14).aspx)

[Remove-CsTrustedApplicationPool]()

[Set-CsTrustedApplicationPool]()

[Get-CsTrustedApplicationPool]()

[New-CsTrustedApplicationComputer]()

[Get-CsSite]()

[Online Version](http://technet.microsoft.com/EN-US/library/30117225-d82b-494b-8bc2-da5d539bdd6b(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/30117225-d82b-494b-8bc2-da5d539bdd6b(OCS.16).aspx)

