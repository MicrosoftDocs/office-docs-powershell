---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsOAuthServer
schema: 2.0.0
---

# Get-CsOAuthServer

## SYNOPSIS
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
In Skype for Business Server, server-to-server authentication (for example, the authentication that enables Skype for Business Server and Exchange to share information) is carried out using the OAuth security protocol.
This type of authentication typically requires three servers: the two servers that need to communicate with one another (Server A and B) and a third-party security token server.
If Servers A and B need to communicate with one another, the two servers contact the token server (also known as an OAuth server) and obtain mutually-trusted security tokens that the two servers can exchange in order to prove their identities.

If you are using an on-premises version of Skype for Business Server and you need to communicate with another server product that fully supports the OAuth protocol then you typically do not need to use a token server; that's because these server products are able to issue their own security tokens.
However, if you need to communicate with another server product then you will need to use a token servers.
These token servers can be managed by using the CsOAuthServer cmdlets.

The functions carried out by the Get-CsOAuthServer cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```
Get-CsOAuthServer
```

Example 1 returns information about all the OAuth servers configured for use in the organization.

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```
Get-CsOAuthServer -Identity "Office 365"
```

In Example 2, information is returned for the OAuth server that has the Identity "Office 365".


## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return one or more OAuth servers.
For example, to return all of the OAuth servers that have an Identity that includes the string value "Microsoft" use this syntax:

`-Filter "*Microsoft*"`

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the OAuth server to be returned.
For example:

`-Identity "Office 365"`

If neither the Identity parameter nor the Filter parameter is included in the command then the Get-CsOAuthServer cmdlet will return information about all your OAuth servers.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account whose OAuth server settings are to be retrieved.

For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Guid
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthServer#Decorated


## NOTES


## RELATED LINKS

[New-CsOAuthServer](New-CsOAuthServer.md)

[Remove-CsOAuthServer](Remove-CsOAuthServer.md)

[Set-CsOAuthServer](Set-CsOAuthServer.md)

