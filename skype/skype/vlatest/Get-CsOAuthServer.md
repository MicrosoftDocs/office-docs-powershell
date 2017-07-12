---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsOAuthServer

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Returns information about the Open Authorization (OAuth) servers configured for use by the organization.
OAuth servers, also known as security token servers, issue security tokens used in server-to-server authentication and authorization.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Returns information about the Open Authorization (OAuth) servers configured for use by the organization.
OAuth servers, also known as security token servers, issue security tokens used in server-to-server authentication and authorization.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Filter
```
Get-CsOAuthServer [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Identity
```
Get-CsOAuthServer [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

In Microsoft Lync Server 2013 Preview, server-to-server authentication (for example, the authentication that enables Lync Server 2013 Preview and Microsoft Exchange Server 2013 Preview to share information) is carried out using the OAuth security protocol.
This type of authentication typically requires three servers: the two servers that need to communicate with one another (Server A and B) and a third-party security token server.
If Servers A and B need to communicate with one another, the two servers contact the token server (also known as an OAuth server) and obtain mutually-trusted security tokens that the two servers can exchange in order to prove their identities.

If you are using an on-premises version of Lync Server 2013 Preview and you need to communicate with another server product that fully supports the OAuth protocol (for example, Exchange 2013 Preview or Microsoft SharePoint 2013) then you typically do not need to use a token server; that's because these server products are able to issue their own security tokens.
However, if you need to communicate with another server product (including server products found on Office 365) then you will need to use a token servers.
These token servers can be managed by using the CsOAuthServer cmdlets.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsOAuthServer"}

Lync Server Control Panel: The functions carried out by the Get-CsOAuthServer cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

In Skype for Business Server 2015, server-to-server authentication (for example, the authentication that enables Skype for Business Server 2015 and Exchange to share information) is carried out using the OAuth security protocol.
This type of authentication typically requires three servers: the two servers that need to communicate with one another (Server A and B) and a third-party security token server.
If Servers A and B need to communicate with one another, the two servers contact the token server (also known as an OAuth server) and obtain mutually-trusted security tokens that the two servers can exchange in order to prove their identities.

If you are using an on-premises version of Skype for Business Server 2015 and you need to communicate with another server product that fully supports the OAuth protocol then you typically do not need to use a token server; that's because these server products are able to issue their own security tokens.
However, if you need to communicate with another server product then you will need to use a token servers.
These token servers can be managed by using the CsOAuthServer cmdlets.

Skype for Business Server Control Panel: The functions carried out by the Get-CsOAuthServer cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns information about all the OAuth servers configured for use in the organization.

Get-CsOAuthServer

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns information about all the OAuth servers configured for use in the organization.

Get-CsOAuthServer

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, information is returned for the OAuth server that has the Identity "Office 365".

Get-CsOAuthServer -Identity "Office 365"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, information is returned for the OAuth server that has the Identity "Office 365".

Get-CsOAuthServer -Identity "Office 365"

## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return one or more OAuth servers.
For example, to return all of the OAuth servers that have an Identity that includes the string value "Microsoft" use this syntax:

-Filter "*Microsoft*"

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
**Below Content Applies To:** Lync Server 2013

Unique identifier for the OAuth server to be returned.
For example:

-Identity "Office 365"

If neither the Identity parameter nor the Filter parameter is included in the command then Get-CsOAuthServer will return information about all your OAuth servers.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the OAuth server to be returned.
For example:

-Identity "Office 365"

If neither the Identity parameter nor the Filter parameter is included in the command then the Get-CsOAuthServer cmdlet will return information about all your OAuth servers.



```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the OAuth service data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### -Tenant
**Below Content Applies To:** Lync Server 2013

Globally unique identifier (GUID) of the Office 365 tenant account whose OAuth server settings are to be retrieved.

For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



**Below Content Applies To:** Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account whose OAuth server settings are to be retrieved.

For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



```yaml
Type: Guid
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
None.
Get-CsOAuthServer does not accept pipelined input.

###  
None.
The Get-CsOAuthServer cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsOAuthServer returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthServer#Decorated object.

###  
The Get-CsOAuthServer cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthServer#Decorated object.

## NOTES

## RELATED LINKS

[New-CsOAuthServer]()

[Remove-CsOAuthServer]()

[Set-CsOAuthServer]()

[Online Version](http://technet.microsoft.com/EN-US/library/c2a61eb0-cdff-4069-99e4-2bdf42812f47(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/c2a61eb0-cdff-4069-99e4-2bdf42812f47(OCS.16).aspx)

