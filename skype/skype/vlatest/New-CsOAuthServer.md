---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsOAuthServer

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Creates a new Open Authorization (OAuth) server for use by the organization.
OAuth servers, also known as security token servers, issue security tokens used in server-to-server authentication and authorization.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Creates a new Open Authorization (OAuth) server for use by the organization.
OAuth servers, also known as security token servers, issue security tokens used in server-to-server authentication and authorization.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
New-CsOAuthServer [[-Identity] <XdsGlobalRelativeIdentity>] -MetadataUrl <String> [-Confirm] [-Force]
 [-InMemory] [-Realm <String>] [-Tenant <Guid>] [-WhatIf] [-AcceptSecurityIdentifierInformation <Boolean>]
 [-AuthorizationUriOverride <String>] [-Type <String>] [<CommonParameters>]
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

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsOAuthServer"}

Lync Server Control Panel: The functions carried out by the New-CsOAuthServer cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

In Skype for Business Server 2015, server-to-server authentication (for example, the authentication that enables Skype for Business Server 2015 and Exchange to share information) is carried out using the OAuth security protocol.
This type of authentication typically requires three servers: the two servers that need to communicate with one another (Server A and B) and a third-party security token server.
If Servers A and B need to communicate with one another, the two servers contact the token server (also known as an OAuth server) and obtain mutually-trusted security tokens that the two servers can exchange in order to prove their identities.

If you are using an on-premises version of Skype for Business Server 2015 and you need to communicate with another server product that fully supports the OAuth then you typically do not need to use a token server; that's because these server products are able to issue their own security tokens.
However, if you need to communicate with another server product then you will need to use a token servers.
These token servers can be managed by using the CsOAuthServer cmdlets.

Skype for Business Server Control Panel: The functions carried out by the New-CsOAuthServer cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

Example 1 creates a new OAuth Server named "Office 365".
The new server uses the metadata URL https://sts.office365.microsoft.com/metadata/json/1.

New-CsOAuthServer -Identity "Office 365" -MetadataUrl "https://sts.office365.microsoft.com/metadata/json/1"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 creates a new OAuth Server named "Office 365".
The new server uses the metadata URL https://sts.office365.microsoft.com/metadata/json/1.

New-CsOAuthServer -Identity "Office 365" -MetadataUrl "https://sts.office365.microsoft.com/metadata/json/1"

## PARAMETERS

### -MetadataUrl
URL where the WS-FederationMetadata for the server is published.
Servers use the metadata to agree on the types of tokens that will be exchanged as well the keys that will be used to sign these tokens.
Note that the specified URL must be available when you run the New-CsOAuthServer cmdlet or else the command will fail.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -Identity
Friendly (and unique) name used to identify the OAuth server.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

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

### -Realm
**Below Content Applies To:** Lync Server 2013

Server-to-server security container.
By default, Lync Server 2013 Preview uses your default SIP domain as its OAuth realm.



**Below Content Applies To:** Skype for Business Server 2015

Server-to-server security container.
By default, Skype for Business Server 2015 uses your default SIP domain as its OAuth realm.



```yaml
Type: String
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

Globally unique identifier (GUID) of the Office 365 tenant account for which the new OAuth server is being created.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



**Below Content Applies To:** Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the new OAuth server is being created.
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

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptSecurityIdentifierInformation
When set to True ($True), security identifiers (SIDs) can be used for authentication purposes.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuthorizationUriOverride
URI used for OAuth authorization override.
The override prevents authenticated users from being reprompted for their credentials after they have logged on.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
Type of authentication used by the server.
For example, this syntax configures the server to use Active Directory Federation Services authentication:

-Type "ADFS"

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
New-CsOAuthServer does not accept pipelined input.

###  
None.
The New-CsOAuthServer cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsOAuthServer creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthServer#Decorated object.

###  
The New-CsOAuthServer cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthServer#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsOAuthServer]()

[Remove-CsOAuthServer]()

[Set-CsOAuthServer]()

[Online Version](http://technet.microsoft.com/EN-US/library/b9d10216-a743-4e62-9cf0-6d5fb55dd64e(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/b9d10216-a743-4e62-9cf0-6d5fb55dd64e(OCS.16).aspx)

