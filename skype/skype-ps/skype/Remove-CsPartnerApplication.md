---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsPartnerApplication
schema: 2.0.0
---

# Remove-CsPartnerApplication

## SYNOPSIS
Removes an existing partner application.
A partner application is any application that Skype for Business Server can directly exchange security tokens with, without having to go through a third-party security token server.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Remove-CsPartnerApplication [-Identity] <XdsGlobalRelativeIdentity> [-Confirm] [-Force] [-Tenant <Guid>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
In Skype for Business Server, server-to-server authentication (for example, the authentication that enables Skype for Business Server and Exchange to share information) is carried out using the OAuth security protocol.
This type of authentication typically requires three servers: the two servers that need to communicate with one another (Server A and B) and a third-party security token server.
If Servers A and B need to communicate with one another, the two servers contact the token server (also known as an OAuth server) and obtain mutually-trusted security tokens that the two servers can exchange in order to prove their identities.

If you are using an on-premises version of Skype for Business Server and you need to communicate with another server product that fully supports the OAuth protocol (for example, Exchange or SharePoint) then you typically do not need to use a token server; that's because these server products are able to issue their own security tokens.
However, you will need to configure the other server product (e.g., Exchange) as a partner application.
(You will also need to configure Skype for Business Server as a partner application for the other server product.) In Skype for Business Server, partner applications are managed by using the CsPartnerApplication cmdlets.

Skype for Business Server Control Panel: The functions carried out by the `Remove-CsPartnerApplication` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsPartnerApplication -Identity "MicrosoftExchange"
```

The command shown in Example 1 deletes the partner application with the Identity "MicrosoftExchange".


### -------------------------- Example 2 --------------------------
```
Get-CsPartnerApplication | Remove-CsPartnerApplication
```

In Example 2, all the partner applications configured for use in the organization are deleted.
To do this, the command first uses the `Get-CsPartnerApplication` cmdlet in order to return a collection of all the partner applications.
This collection is then piped to the `Remove-CsPartnerApplication` cmdlet, which deletes each application in the collection.


### -------------------------- Example 3 --------------------------
```
Get-CsPartnerApplication | Where-Object {$_.ApplicationTrustLevel -ne "Full"} | Remove-CsPartnerApplication
```

In Example 3, all the partner applications where the trust level is set to anything other than Full are deleted.
To carry out this task, the command first calls the `Get-CsPartnerApplication` cmdlet without any parameters in order to return a collection of all the partner applications configured for use in the organization.
This collection is then piped to the `Where-Object` cmdlet, which selects only those applications where the ApplicationTrustLevel property is not equal to (-ne) "Full".
The applications that meet that criterion are then piped to and removed by, the `Remove-CsPartnerApplication` cmdlet.


## PARAMETERS

### -Identity
Unique identifier of the partner application to be removed.
For example:

`-Identity "MicrosoftExchange"`

Note that you cannot use wildcard characters when specifying an Identity.

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
Globally unique identifier (GUID) of the Skype for Business Online tenant account for the partner application being deleted.
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
The `Remove-CsPartnerApplication` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.PartnerApplication#Decorated object.

## OUTPUTS

###  
None.
Instead, the `Remove-CsPartnerApplication` cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.PartnerApplication#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsPartnerApplication](Get-CsPartnerApplication.md)

[New-CsPartnerApplication](New-CsPartnerApplication.md)

[Set-CsPartnerApplication](Set-CsPartnerApplication.md)

