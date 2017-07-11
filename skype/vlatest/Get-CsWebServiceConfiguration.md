---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsWebServiceConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Returns information about all the Web Services configuration settings in use in your organization.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Returns information about all the Web Services configuration settings in use in your organization.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsWebServiceConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsWebServiceConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Many Microsoft Lync Server 2010 components are web-based: these components either use web services or web pages to carry out their tasks.
For example, users employ a web service when searching for new contacts in the Address Book or when using group expansion to view the individual members of a distribution group.
Likewise, components ranging from dial-in conferencing to Microsoft Lync Server 2010 Control Panel use web pages as the interface between Lync Server 2010 and users.

The CsWebServiceConfiguration cmdlets enable administrators to manage Web Services configuration settings throughout the organization; this includes managing group expansion, certificate settings, and allowed authentication methods.
Because you can configure different settings at the global, site, and service scope (albeit for the only the Web Services service), you can customize Web Services capabilities for different users and different locations.

The Get-CsWebServiceConfiguration cmdlet enables you to return detailed information about the Web Services configuration settings currently in use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsWebServiceConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsWebServiceConfiguration"}

Below Content Applies To: Lync Server 2013

Many Lync Server components are web-based: these components either use web services or webpages to carry out their tasks.
For example, users employ a web service when searching for new contacts in the Address Book or when using group expansion to view the individual members of a distribution group.
Likewise, components ranging from dial-in conferencing to Lync Server Control Panel use webpages as the interface between Lync Server and users.

The CsWebServiceConfiguration cmdlets enable administrators to manage Web Services configuration settings throughout the organization; this includes managing group expansion, certificate settings, and allowed authentication methods.
Because you can configure different settings at the global, site, and service scope (albeit for the only the Web Services service), you can customize Web Services capabilities for different users and different locations.

The Get-CsWebServiceConfiguration cmdlet enables you to return detailed information about the Web Services configuration settings currently in use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsWebServiceConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsWebServiceConfiguration"}

Below Content Applies To: Skype for Business Server 2015

Many Skype for Business Server 2015 components are web-based: these components either use web services or webpages to carry out their tasks.
For example, users employ a web service when searching for new contacts in the Address Book or when using group expansion to view the individual members of a distribution group.
Likewise, components ranging from dial-in conferencing to Skype for Business Server Control Panel use webpages as the interface between Skype for Business Server 2015 and users.

The CsWebServiceConfiguration cmdlets enable administrators to manage Web Services configuration settings throughout the organization; this includes managing group expansion, certificate settings, and allowed authentication methods.
Because you can configure different settings at the global, site, and service scope (albeit for the only the Web Services service), you can customize Web Services capabilities for different users and different locations.

The Get-CsWebServiceConfiguration cmdlet enables you to return detailed information about the Web Services configuration settings currently in use in your organization.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsWebServiceConfiguration
```

The preceding command returns information about all the Web Services configuration settings currently in use in the organization.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns information about all the Web Services configuration settings currently in use in the organization.

Get-CsWebServiceConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns information about all the Web Services configuration settings currently in use in the organization.

Get-CsWebServiceConfiguration

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsWebServiceConfiguration -Identity site:Redmond
```

The command shown in Example 2 returns information about the Web Services configuration settings that have the Identity site:Redmond.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 returns information about the Web Services configuration settings that have the Identity site:Redmond.

Get-CsWebServiceConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 returns information about the Web Services configuration settings that have the Identity site:Redmond.

Get-CsWebServiceConfiguration -Identity site:Redmond

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsWebServiceConfiguration -Filter "site:*"
```

Example 3 returns all the Web Services configuration settings that have been assigned at the site scope.
To do this, the Filter parameter is included when calling Get-CsWebServiceConfiguration; the filter value "site:*" ensures that only those settings that have an Identity that begins with the string value "site:" are returned.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns all the Web Services configuration settings that have been assigned at the site scope.
To do this, the Filter parameter is included when calling Get-CsWebServiceConfiguration; the filter value "site:*" ensures that only those settings that have an Identity that begins with the string value "site:" are returned.

Get-CsWebServiceConfiguration -Filter "site:*"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns all the Web Services configuration settings that have been assigned at the site scope.
To do this, the Filter parameter is included when calling the Get-CsWebServiceConfiguration cmdlet; the filter value "site:*" ensures that only those settings that have an Identity that begins with the string value "site:" are returned.

Get-CsWebServiceConfiguration -Filter "site:*"

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsWebServiceConfiguration | Where-Object {$_.UsePinAuth -eq $False}
```

In Example 4, the command returns all the Web Services configuration settings that do not allow personal identification number (PIN) authentication.
This is done by first calling Get-CsWebServiceConfiguration to return all the Web Services configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the UsePinAuth property is equal to False.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, the command returns all the Web Services configuration settings that do not allow personal identification number (PIN) authentication.
This is done by first calling Get-CsWebServiceConfiguration to return all the Web Services configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the UsePinAuth property is equal to False.

Get-CsWebServiceConfiguration | Where-Object {$_.UsePinAuth -eq $False}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, the command returns all the Web Services configuration settings that do not allow personal identification number (PIN) authentication.
This is done by first calling the Get-CsWebServiceConfiguration cmdlet to return all the Web Services configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the UsePinAuth property is equal to False.

Get-CsWebServiceConfiguration | Where-Object {$_.UsePinAuth -eq $False}

### -------------------------- Example 5 ------------------------ (Lync Server 2010)
```
Get-CsWebServiceConfiguration | Where-Object {$_.MaxGroupSizeToExpand -gt 100}
```

The preceding command returns all the Web Services configuration settings where the maximum group expansion size is greater than 100.
To do this, the command first uses Get-CsWebServiceConfiguration to return all the Web Services configuration settings currently in use.
This information is then piped to the Where-Object cmdlet, which selects only those settings where the MaxGroupSizeToExpand property is greater than 100.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

Example 5 returns all the Web Services configuration settings where the maximum group expansion size is greater than 100.
To do this, the command first uses Get-CsWebServiceConfiguration to return all the Web Services configuration settings currently in use.
This information is then piped to the Where-Object cmdlet, which selects only those settings where the MaxGroupSizeToExpand property is greater than 100.

Get-CsWebServiceConfiguration | Where-Object {$_.MaxGroupSizeToExpand -gt 100}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

Example 5 returns all the Web Services configuration settings where the maximum group expansion size is greater than 100.
To do this, the command first uses the Get-CsWebServiceConfiguration cmdlet to return all the Web Services configuration settings currently in use.
This information is then piped to the Where-Object cmdlet, which selects only those settings where the MaxGroupSizeToExpand property is greater than 100.

Get-CsWebServiceConfiguration | Where-Object {$_.MaxGroupSizeToExpand -gt 100}

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Unique identifier for the Web Services configuration settings to be returned.
To return the global settings, use this syntax: -Identity global.
To return settings configured at the site scope, use syntax similar to this: -Identity "site:Redmond." Service-scope settings can be returned using syntax like this: -Identity "service:WebServer:atl-cs-001.litwareinc.com".

You cannot use both the Filter and the Identity parameters in the same command.
If you do not specify either parameter, Get-CsWebServiceConfiguration will return all the Web Services settings collections currently in use in your organization.



Below Content Applies To: Skype for Business Server 2015

Unique identifier for the Web Services configuration settings to be returned.
To return the global settings, use this syntax:

-Identity global

To return settings configured at the site scope, use syntax similar to this:

-Identity "site:Redmond"

Service-scope settings can be returned using syntax like this:

-Identity "service:WebServer:atl-cs-001.litwareinc.com"

You cannot use both the Filter and the Identity parameters in the same command.
If you do not specify either parameter, the Get-CsWebServiceConfiguration cmdlet will return all the Web Services settings collections currently in use in your organization.



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
Below Content Applies To: Lync Server 2010, Lync Server 2013

Enables you to use wildcards when specifying the Web Services configuration settings collection (or collections) to be returned.
For example, this syntax returns all the settings configured at the site scope: -Filter "site:*".

You cannot use both the Filter and the Identity parameters in the same command.



Below Content Applies To: Skype for Business Server 2015

Enables you to use wildcards when specifying the Web Services configuration settings collection (or collections) to be returned.
For example, this syntax returns all the settings configured at the site scope:

-Filter "site:*"

You cannot use both the Filter and the Identity parameters in the same command.



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
Below Content Applies To: Lync Server 2010

Retrieves the Web Services configuration data from the local replica of the  Central Management store rather than from the Central Management store itself.



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Retrieves the Web Services configuration data from the local replica of the Central Management store rather than from the Central Management store itself.



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
Get-CsWebServiceConfiguration does not accept pipelined input.

###  
None.
The Get-CsWebServiceConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsWebServiceConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Web.WebServiceSettings object.

###  
The Get-CsWebServiceConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Web.WebServiceSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/28582668-839c-4b04-8211-928c91634672(OCS.14).aspx)

[New-CsWebServiceConfiguration]()

[Remove-CsWebServiceConfiguration]()

[Set-CsWebServiceConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/28582668-839c-4b04-8211-928c91634672(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/28582668-839c-4b04-8211-928c91634672(OCS.16).aspx)

