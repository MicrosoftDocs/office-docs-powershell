---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/request-spopersonalsite
applicable: SharePoint Online
title: Request-SPOPersonalSite
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Request-SPOPersonalSite

## SYNOPSIS

Requests that one or more users be enqueued for a Personal Site to be created.

## SYNTAX

```powershell
Request-SPOPersonalSite [-NoWait] -UserEmails <String[]> [<CommonParameters>]
```

## DESCRIPTION

The `Request-SPOPersonalSite` cmdlet requests that the users specified be enqueued so that a Personal Site be created for each. The actual Personal site is created by a Timer Job later. If the user already has a Personal Site created, the request for creation for the user will be silently ignored.

Note: 
- You must specify a string array of user logins that contains one or more valid user email (logins) and cannot contain any empty fields. The command will stop if it encounters any empty strings in the array. A maximum of 200 users can be specified. 
- The actor executing this cmdlet must be at least assigned the SharePoint Online administrator role and have been assigned a SharePoint Online license to be able to provision the OneDrive for Business sites. The users who the sites will be provisioned for must also have a SharePoint license assigned. 
-  This cmdlet is NOT OneDrive Multi-Geo aware. If you need to request Personal Sites for Multi-Geo enabled tenants, you must run this cmdlet for users in the region their data is to be hosted in. To retrieve users with a specific PDL, use the following sample: `Get-MSOLUser | Where {$_.PreferredDataLocation -eq "EUR"}`.

## EXAMPLES

### ----------------------EXAMPLE 1-----------------------

```powershell
$emails = "user1@contoso.com", "user2@contoso.com"
Request-SPOPersonalSite -UserEmails $emails
```

This example requests that two users to be enqueued for the creation of a Personal Site.

### ----------------------EXAMPLE 2-----------------------

```powershell
Request-SPOPersonalSite -UserEmails $emails
```

This example requests that many users to be queued for the creation of a Personal Site. The users are previously defined using the variable $emails.

## PARAMETERS

### -NoWait

Continues without the status being polled. Polling the action can slow it's progress if lots of user emails are specified.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserEmails

Specifies one or more user logins to be enqueued for the creation of a Personal Site. The Personal site is created by a Timer Job later. You can specify between 1 and 200 users.
> [!NOTE]
> If you're pre-provisioning OneDrive for a large number of users, it might take multiple days for the OneDrive locations to be created.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String[]

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
