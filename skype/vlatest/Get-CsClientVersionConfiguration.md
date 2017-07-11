---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsClientVersionConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Retrieves information about the specified collection of client version configuration settings in use in your organization.
Client version configuration settings determine whether or not Microsoft Lync Server 2010 checks the version number of each client application that logs on to the system.
If client version filtering is enabled the ability of that client application to access the system will be based on settings configured in the relevant client version policy.

**Below Content Applies To:** Lync Server 2013

Retrieves information about the specified collection of client version configuration settings in use in your organization.
Client version configuration settings determine whether or not Lync Server checks the version number of each client application that logs on to the system.
If client version filtering is enabled the ability of that client application to access the system will be based on settings configured in the relevant client version policy.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Retrieves information about the specified collection of client version configuration settings in use in your organization.
Client version configuration settings determine whether or not Skype for Business Server 2015 checks the version number of each client application that logs on to the system.
If client version filtering is enabled the ability of that client application to access the system will be based on settings configured in the relevant client version policy.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsClientVersionConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsClientVersionConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Lync Server 2010 gives administrators considerable leeway when it comes to specifying the client software (and, equally important, the version number of that software) that users can use to log on to the system.
For example, there is no technical reason that requires users to log on to Lync Server 2010 by using Microsoft Lync 2010; there are no technical limitations that would prevent users from logging on by using Microsoft Office Communicator 2007 R2.

However, there might be some non-technical reasons why you would prefer that your users do not log on by using Office Communicator 2007 R2.
For example, Office Communicator 2007 R2 does not support all of the features and capabilities found in Lync 2010; as a result, users who log on with Office Communicator 2007 R2 will have a different experience than users who log on by using Lync 2010.
This can create difficulties for your users; it can also create difficulties for help desk personnel, who must provide support for a number of different client applications.

If this could be a problem for your organization you can employ client version filtering in order to specify which client applications can be used to log on to Lync Server 2010.
When you install Lync Server 2010, a global set of client version configuration settings is installed and enabled.
These settings are used to determine whether or not client version filtering is enabled.
In addition to the global settings, client version configuration settings can also be applied at the site scope; in those instances, the site settings will have precedence over the global settings.

The Get-CsClientVersionConfiguration cmdlet enables you to retrieve information about the client version configuration settings currently in use in your organization.
Note that this cmdlet does not return information about which client applications are allowed or are not allowed.
To retrieve that information, use Get-CsClientVersionPolicy.

Note, too that client version configuration is not a security feature.
The technology relies on self-reporting from client applications, and does not attempt to verify that an application is really the application and the version number of that application that it claims to be.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsClientVersionConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsClientVersionConfiguration"}

**Below Content Applies To:** Lync Server 2013

Lync Server gives administrators considerable leeway when it comes to specifying the client software (and, equally important, the version number of that software) that users can use to log on to the system.
For example, there is no technical reason that requires users to log on to Lync Server by using Lync; there are no technical limitations that would prevent users from logging on by using Microsoft Office Communicator 2007 R2.

However, there might be some non-technical reasons why you would prefer that your users do not log on by using Office Communicator 2007 R2.
For example, Office Communicator 2007 R2 does not support all of the features and capabilities found in Lync; as a result, users who log on with Office Communicator 2007 R2 will have a different experience than users who log on by using Lync.
This can create difficulties for your users; it can also create difficulties for help desk personnel, who must provide support for a number of different client applications.

If this could be a problem for your organization you can employ client version filtering in order to specify which client applications can be used to log on to Lync Server.
When you install Lync Server, a global set of client version configuration settings is installed and enabled.
These settings are used to determine whether or not client version filtering is enabled.
In addition to the global settings, client version configuration settings can also be applied at the site scope; in those instances, the site settings will have precedence over the global settings.

The Get-CsClientVersionConfiguration cmdlet enables you to retrieve information about the client version configuration settings currently in use in your organization.
Note that this cmdlet does not return information about which client applications are allowed or are not allowed.
To retrieve that information, use Get-CsClientVersionPolicy.

Note, too that client version configuration is not a security feature.
The technology relies on self-reporting from client applications, and does not attempt to verify that an application is really the application and the version number of that application that it claims to be.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsClientVersionConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsClientVersionConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Skype for Business Server 2015 gives administrators considerable leeway when it comes to specifying the client software (and, equally important, the version number of that software) that users can use to log on to the system.
For example, there is no technical reason that requires users to log on to Skype for Business Server 2015 by using Skype for Business; there are no technical limitations that would prevent users from logging on by using Microsoft Office Communicator 2007 R2.

However, there might be some non-technical reasons why you would prefer that your users do not log on by using Office Communicator 2007 R2.
For example, Office Communicator 2007 R2 does not support all of the features and capabilities found in Skype for Business; as a result, users who log on with Office Communicator 2007 R2 will have a different experience than users who log on by using Skype for Business.
This can create difficulties for your users; it can also create difficulties for help desk personnel, who must provide support for a number of different client applications.

If this could be a problem for your organization you can employ client version filtering in order to specify which client applications can be used to log on to Skype for Business Server 2015.
When you install Skype for Business Server 2015, a global set of client version configuration settings is installed and enabled.
These settings are used to determine whether or not client version filtering is enabled.
In addition to the global settings, client version configuration settings can also be applied at the site scope; in those instances, the site settings will have precedence over the global settings.

The Get-CsClientVersionConfiguration cmdlet enables you to retrieve information about the client version configuration settings currently in use in your organization.
Note that this cmdlet does not return information about which client applications are allowed or are not allowed.
To retrieve that information, use the Get-CsClientVersionPolicy cmdlet.

Note, too that client version configuration is not a security feature.
The technology relies on self-reporting from client applications, and does not attempt to verify that an application is really the application and the version number of that application that it claims to be.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsClientVersionConfiguration
```

In the first example, Get-CsClientVersionConfiguration is called without specifying any additional parameters.
This causes Get-CsClientVersionConfiguration to return a collection of all the client version configuration settings currently in use in your organization.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In the first example, Get-CsClientVersionConfiguration is called without specifying any additional parameters.
This causes Get-CsClientVersionConfiguration to return a collection of all the client version configuration settings currently in use in your organization.

Get-CsClientVersionConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In the first example, the Get-CsClientVersionConfiguration cmdlet is called without specifying any additional parameters.
This causes the Get-CsClientVersionConfiguration cmdlet to return a collection of all the client version configuration settings currently in use in your organization.

Get-CsClientVersionConfiguration

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsClientVersionConfiguration -Identity site:Redmond
```

In the preceding example, Get-CsClientVersionConfiguration returns all the client version configuration settings that have the Identity site:Redmond.
Because Identities must be unique, this command will never return more than one item.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In this example, Get-CsClientVersionConfiguration returns all the client version configuration settings that have the Identity site:Redmond.
Because Identities must be unique, this command will never return more than one item.

Get-CsClientVersionConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In this example, the Get-CsClientVersionConfiguration cmdlet returns all the client version configuration settings that have the Identity site:Redmond.
Because Identities must be unique, this command will never return more than one item.

Get-CsClientVersionConfiguration -Identity site:Redmond

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsClientVersionConfiguration -Filter "site:*"
```

Example 3 returns all the client version configuration settings that have been applied at the site scope.
This is done by including the Filter parameter and the filter value "site:*".
That filter value instructs Get-CsClientVersionConfiguration to return only the settings that have an Identity that begins with the string value "site:".

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns all the client version configuration settings that have been applied at the site scope.
This is done by including the Filter parameter and the filter value "site:*".
That filter value instructs Get-CsClientVersionConfiguration to return only the settings that have an Identity that begins with the string value "site:".

Get-CsClientVersionConfiguration -Filter "site:*"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns all the client version configuration settings that have been applied at the site scope.
This is done by including the Filter parameter and the filter value "site:*".
That filter value instructs the Get-CsClientVersionConfiguration cmdlet to return only the settings that have an Identity that begins with the string value "site:".

Get-CsClientVersionConfiguration -Filter "site:*"

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsClientVersionConfiguration | Where-Object {$_.Enabled -eq $False}
```

The preceding example returns all the client version configuration settings that are currently disabled.
To carry out this task, the command first uses Get-CsClientVersionConfiguration to return a collection of all the client version settings configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which applies a filter that limits the collection to those settings where the Enabled property is equal to False.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns all the client version configuration settings that are currently disabled.
To carry out this task, the command first uses Get-CsClientVersionConfiguration to return a collection of all the client version settings configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which applies a filter that limits the collection to those settings where the Enabled property is equal to False.

Get-CsClientVersionConfiguration | Where-Object {$_.Enabled -eq $False}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns all the client version configuration settings that are currently disabled.
To carry out this task, the command first uses the Get-CsClientVersionConfiguration cmdlet to return a collection of all the client version settings configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which applies a filter that limits the collection to those settings where the Enabled property is equal to False.

Get-CsClientVersionConfiguration | Where-Object {$_.Enabled -eq $False}

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010

Indicates the unique identifier for the collection of client version configuration settings you want to return.
To refer to the global settings, use this syntax: -Identity global.
To refer to a collection configured at the site scope, use syntax similar to this: -Identity site:Redmond.
You cannot use wildcards when specifying an Identity.
If you need to use wildcards, then include the Filter parameter instead.

If this parameter is not specified then Get-CsClientVersionConfiguration   returns a collection of all the client version configuration settings in use in the organization.



**Below Content Applies To:** Lync Server 2013

Indicates the unique identifier for the collection of client version configuration settings you want to return.
To refer to the global settings, use this syntax: -Identity global.
To refer to a collection configured at the site scope, use syntax similar to this: -Identity site:Redmond.
You cannot use wildcards when specifying an Identity.
If you need to use wildcards, then include the Filter parameter instead.

If this parameter is not specified then Get-CsClientVersionConfiguration returns a collection of all the client version configuration settings in use in the organization.



**Below Content Applies To:** Skype for Business Server 2015

Indicates the unique identifier for the collection of client version configuration settings you want to return.
To refer to the global settings, use this syntax: -Identity global.
To refer to a collection configured at the site scope, use syntax similar to this: -Identity site:Redmond.
You cannot use wildcards when specifying an Identity.
If you need to use wildcards, then include the Filter parameter instead.

If this parameter is not specified then the Get-CsClientVersionConfiguration cmdlet returns a collection of all the client version configuration settings in use in the organization.



```yaml
Type: XdsIdentity
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
Enables you to use wildcard characters in order to return a collection (or collections) of client version configuration settings.
To return a collection of all the settings configured at the site scope, use this syntax: -Filter site:*.
To return a collection of all the settings that have the string value "EMEA" somewhere in their Identity (the only property you can filter for) use this syntax: -Filter *EMEA*.

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

### -LocalStore
Retrieves the client version configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsClientVersionConfiguration does not accept pipelined input.

###  
None.
The Get-CsClientVersionConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsClientVersionConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.ClientVersionConfiguration object.

###  
The Get-CsClientVersionConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.ClientVersion.ClientVersionConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/ed39feda-ebcf-4ed6-a970-64543f150b16(OCS.14).aspx)

[New-CsClientVersionConfiguration]()

[Remove-CsClientVersionConfiguration]()

[Set-CsClientVersionConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/ed39feda-ebcf-4ed6-a970-64543f150b16(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/ed39feda-ebcf-4ed6-a970-64543f150b16(OCS.16).aspx)

