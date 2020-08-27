---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnprequestaccessemails
applicable: SharePoint Online
schema: 2.0.0
title: Set-PnPRequestAccessEmails
---

# Set-PnPRequestAccessEmails

## SYNOPSIS
Sets Request Access Email on a web

## SYNTAX 

```powershell
Set-PnPRequestAccessEmails [-Emails <String[]>]
                           [-Disabled [<SwitchParameter>]]
                           [-Web <WebPipeBind>]
                           [-Connection <PnPConnection>]
```

## DESCRIPTION
Enables or disables access requests to be sent and configures which e-mail address should receive these requests. The web you apply this on must have unique rights.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPRequestAccessEmails -Emails someone@example.com 
```

This will enable requesting access and send the requests to the provided e-mail address

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPRequestAccessEmails -Disabled
```

This will disable the ability to request access to the site

### ------------------EXAMPLE 3------------------
```powershell
Set-PnPRequestAccessEmails -Disabled:$false
```

This will enable the ability to request access to the site and send the requests to the default owners of the site

## PARAMETERS

### -Disabled
Enables or disables access to be requested

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Emails
Email address to send the access requests to

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)