---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsOAuthServer
schema: 2.0.0
---

# Remove-CsOAuthServer

## SYNOPSIS
Removes an existing Open Authorization (OAuth) server.
OAuth servers, also known as security token servers, issue security tokens used in server-to-server authentication and authorization.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Remove-CsOAuthServer [-Identity] <XdsGlobalRelativeIdentity> [-Confirm] [-Force] [-Tenant <Guid>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
In Skype for Business Server, server-to-server authentication (for example, the authentication that enables Skype for Business Server and Exchange to share information) is carried out using the OAuth security protocol.
This type of authentication typically requires three servers: the two servers that need to communicate with one another (Server A and B) and a third-party security token server.
If Servers A and B need to communicate with one another, the two servers contact the token server (also known as an OAuth server) and obtain mutually-trusted security tokens that the two servers can exchange in order to prove their identities.

If you are using an on-premises version of Skype for Business Server and you need to communicate with another server product that fully supports the OAuth protocol then you typically do not need to use a token server; that's because these server products are able to issue their own security tokens.
However, if you need to communicate with another server product (including server products found on Office 365) then you will need to use a token servers.
These token servers can be managed by using the CsOAuthServer cmdlets.

Skype for Business Server Control Panel: The functions carried out by the `Remove-CsOAuthServer` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsOAuthServer -Identity "Office365"
```

The command shown in Example 1 deletes a single OAuth server: the server with the identity "Office 365".


### -------------------------- Example 2 --------------------------
```
Get-CsOAuthServer | Remove-CsOAuthServer
```

Example 2 deletes all the OAuth servers configured for use in the organization.
To carry out this task, the command first calls the `Get-CsOAuthServer` cmdlet without any parameters in order to return all the OAuth servers.
These servers are then piped to, and removed by, the `Remove-CsOAuthServer` cmdlet.


## PARAMETERS

### -Identity
Unique identifier for the OAuth server to be deleted.
For example:

`-Identity "Office 365"`

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for the OAuth server being deleted.
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

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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

###  
The `Remove-CsOAuthServer` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthServer#Decorated object.

## OUTPUTS

###  
None.
Instead, the `Remove-CsOAuthServer` cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthServer#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsOAuthServer](Get-CsOAuthServer.md)

[New-CsOAuthServer](New-CsOAuthServer.md)

[Set-CsOAuthServer](Set-CsOAuthServer.md)

